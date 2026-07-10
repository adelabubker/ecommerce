import { computed, Injectable, inject, signal } from '@angular/core';

import { ProductCatalogService } from '../../../core/services/product-catalog.service';

const FAVORITES_STORAGE_KEY = 'kosa.favoriteProductIds';

/**
 * FavoritesFacade acts as the Presentation Facade for the Wishlist/Favorites feature.
 * It manages the client-side state of favorited products, integrates with local storage
 * for persistence, and isolates components from direct service catalog interactions.
 */
@Injectable({ providedIn: 'root' })
export class FavoritesFacade {
  /** Injects core catalog service to fetch products dynamically */
  private readonly catalog = inject(ProductCatalogService);

  /** Internal signal maintaining the list of favorited product IDs */
  private readonly favoriteIdsSignal = signal<string[]>(this.readStoredFavorites());

  /** Read-only signal exposing the array of favorited product IDs */
  readonly favoriteIds = computed(() => this.favoriteIdsSignal());

  /** Read-only computed signal tracking the number of items in the wishlist */
  readonly count = computed(() => this.favoriteIds().length);

  /**
   * Computed signal that filters the core catalog list to return actual
   * Product objects matching the user's wishlist IDs.
   */
  readonly favoriteProducts = computed(() =>
    this.catalog.products.filter((product) => this.favoriteIds().includes(product.id)),
  );

  /**
   * Checks whether a specific product is marked as a favorite.
   * @param productId The ID of the product
   * @returns True if favorite, false otherwise
   */
  isFavorite(productId: string): boolean {
    return this.favoriteIds().includes(productId);
  }

  /**
   * Toggles the favorite status of a product (adds if not present, removes if present).
   * Persists the resulting list in local storage.
   * @param productId The ID of the product
   */
  toggle(productId: string): void {
    const nextIds = this.isFavorite(productId)
      ? this.favoriteIds().filter((favoriteId) => favoriteId !== productId)
      : [...this.favoriteIds(), productId];

    this.favoriteIdsSignal.set(nextIds);
    this.storeFavorites(nextIds);
  }

  /**
   * Directly removes a product from the wishlist.
   * @param productId The ID of the product
   */
  remove(productId: string): void {
    const nextIds = this.favoriteIds().filter((favoriteId) => favoriteId !== productId);
    this.favoriteIdsSignal.set(nextIds);
    this.storeFavorites(nextIds);
  }

  /**
   * Helper method to read persisted wishlist IDs from the browser's LocalStorage.
   * @returns An array of product ID strings
   */
  private readStoredFavorites(): string[] {
    try {
      const storedValue = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return storedValue ? (JSON.parse(storedValue) as string[]) : [];
    } catch {
      return [];
    }
  }

  /**
   * Helper method to serialize and store wishlist IDs in browser's LocalStorage.
   * Falls back gracefully to in-memory state if LocalStorage access is blocked.
   * @param productIds Array of product IDs to save
   */
  private storeFavorites(productIds: string[]): void {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(productIds));
    } catch {
      // Keeping favorites in memory is still better than failing the interaction.
    }
  }
}
