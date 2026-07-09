import { computed, Injectable, inject, signal } from '@angular/core';

import { Product } from '../../../../core/models/catalog.models';
import { ProductCatalogService } from '../../../../core/services/product-catalog.service';

const FAVORITES_STORAGE_KEY = 'kosa.favoriteProductIds';

@Injectable({ providedIn: 'root' })
export class FavoritesFacade {
  private readonly catalog = inject(ProductCatalogService);
  private readonly favoriteIdsSignal = signal<string[]>(this.readStoredFavorites());

  readonly favoriteIds = computed(() => this.favoriteIdsSignal());
  readonly count = computed(() => this.favoriteIds().length);

  readonly favoriteProducts = computed(() =>
    this.catalog.products.filter((product) => this.favoriteIds().includes(product.id)),
  );

  isFavorite(productId: string): boolean {
    return this.favoriteIds().includes(productId);
  }

  toggle(productId: string): void {
    const nextIds = this.isFavorite(productId)
      ? this.favoriteIds().filter((favoriteId) => favoriteId !== productId)
      : [...this.favoriteIds(), productId];

    this.favoriteIdsSignal.set(nextIds);
    this.storeFavorites(nextIds);
  }

  remove(productId: string): void {
    const nextIds = this.favoriteIds().filter((favoriteId) => favoriteId !== productId);
    this.favoriteIdsSignal.set(nextIds);
    this.storeFavorites(nextIds);
  }

  private readStoredFavorites(): string[] {
    try {
      const storedValue = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return storedValue ? (JSON.parse(storedValue) as string[]) : [];
    } catch {
      return [];
    }
  }

  private storeFavorites(productIds: string[]): void {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(productIds));
    } catch {
      // Keeping favorites in memory is still better than failing the interaction.
    }
  }
}
