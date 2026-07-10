import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Product } from '../../../../../core/models/catalog.models';
import { ProductCatalogService } from '../../../../../core/services/product-catalog.service';
import { CartFacade } from '../../../../cart/application/cart.facade';
import { FavoritesFacade } from '../../../../favorites/application/favorites.facade';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  template: `
    <article class="product-card">
      <button
        type="button"
        class="favorite-toggle"
        [class.active]="isFavorite"
        [attr.aria-pressed]="isFavorite"
        [attr.aria-label]="
          isFavorite
            ? 'Remove ' + product.name + ' from favorites'
            : 'Add ' + product.name + ' to favorites'
        "
        (click)="onToggleFavorite()"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 21s-7.2-4.4-9.6-8.7C.7 9.2 2.2 5.4 5.7 4.6c2-.5 3.8.3 5 1.8.3.4.8.4 1.1 0 1.2-1.5 3-2.3 5-1.8 3.5.8 5 4.6 3.3 7.7C19.2 16.6 12 21 12 21Z" />
        </svg>
      </button>

      <a [routerLink]="['/shop/product', product.slug]">
        <img [src]="product.imageUrl" [alt]="product.name">

        <span>{{ product.categoryName }}</span>
        <h3>{{ product.name }}</h3>
        <p>{{ product.summary }}</p>
      </a>

      <div class="product-meta">
        <strong>{{ product.price | currency: 'USD' }}</strong>
        <small>{{ product.unit }}</small>
      </div>

      <div class="product-actions">
        <button
          type="button"
          class="add-cart-button"
          [attr.aria-label]="'Add ' + product.name + ' to cart'"
          (click)="onAddToCart()"
        >
          Add to Cart
        </button>
      </div>
    </article>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Input() isFavorite = false;

  @Output() readonly toggleFavorite = new EventEmitter<string>();
  @Output() readonly addToCart = new EventEmitter<Product>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.product.id);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}

@Injectable({ providedIn: 'root' })
export class ShopFacade {
  private readonly catalog = inject(ProductCatalogService);

  readonly categories = this.catalog.categories;
  readonly allProducts = this.catalog.products;

  getCategoryBySlug(slug: string | null) {
    return this.catalog.getCategoryBySlug(slug);
  }

  getProductsByCategory(slug: string | null) {
    return this.catalog.getProductsByCategory(slug);
  }

  getProductCountByCategory(slug: string) {
    return this.catalog.getProductCountByCategory(slug);
  }
}

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
})
export class ShopPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly shop = inject(ShopFacade);
  readonly cart = inject(CartFacade);
  readonly favorites = inject(FavoritesFacade);

  readonly categories = this.shop.categories;
  readonly categorySlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('categorySlug'))),
    {
      initialValue: this.route.snapshot.paramMap.get('categorySlug'),
    },
  );

  readonly selectedCategory = computed(() => this.shop.getCategoryBySlug(this.categorySlug()));

  readonly products = computed(() => this.shop.getProductsByCategory(this.categorySlug()));

  toggleFavorite(productId: string): void {
    this.favorites.toggle(productId);
  }

  addToCart(product: Product): void {
    this.cart.addProduct(product);
    this.cart.openDrawer();
  }
}
