import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Product } from '../../../../../core/models/catalog.models';
import { CartFacade } from '../../../../cart/presentation/facades/cart.facade';
import { FavoritesFacade } from '../../../../favorites/presentation/facades/favorites.facade';
import { ShopFacade } from '../../facades/shop.facade';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

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
