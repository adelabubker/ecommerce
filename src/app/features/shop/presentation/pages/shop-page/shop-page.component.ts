import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Product } from '../../../../../core/models/catalog.models';
import { ProductCatalogService } from '../../../../../core/services/product-catalog.service';
import { CartFacade } from '../../../../cart/application/cart.facade';
import { FavoritesFacade } from '../../../../favorites/application/favorites.facade';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
})
export class ShopPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly catalog = inject(ProductCatalogService);
  readonly cart = inject(CartFacade);
  readonly favorites = inject(FavoritesFacade);

  readonly categories = this.catalog.categories;
  readonly categorySlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('categorySlug'))),
    {
      initialValue: this.route.snapshot.paramMap.get('categorySlug'),
    },
  );

  readonly selectedCategory = computed(() => this.catalog.getCategoryBySlug(this.categorySlug()));

  readonly products = computed(() => this.catalog.getProductsByCategory(this.categorySlug()));

  toggleFavorite(productId: string): void {
    this.favorites.toggle(productId);
  }

  addToCart(product: Product): void {
    this.cart.addProduct(product);
    this.cart.openDrawer();
  }
}
