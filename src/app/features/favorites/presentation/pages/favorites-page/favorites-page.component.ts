import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductCatalogService } from '../../../../../core/services/product-catalog.service';
import { FavoritesFacade } from '../../../application/favorites.facade';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPageComponent {
  constructor(
    readonly catalog: ProductCatalogService,
    readonly favorites: FavoritesFacade,
  ) {}

  favoriteProducts() {
    return this.catalog.products.filter((product) => this.favorites.isFavorite(product.id));
  }
}
