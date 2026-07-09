import { Injectable, inject } from '@angular/core';

import { Product, ProductCategory } from '../../../../core/models/catalog.models';
import { ProductCatalogService } from '../../../../core/services/product-catalog.service';

@Injectable({ providedIn: 'root' })
export class ShopFacade {
  private readonly catalog = inject(ProductCatalogService);

  readonly categories: ProductCategory[] = this.catalog.categories;
  readonly allProducts: Product[] = this.catalog.products;

  getCategoryBySlug(slug: string | null): ProductCategory | undefined {
    return this.catalog.getCategoryBySlug(slug);
  }

  getProductsByCategory(slug: string | null): Product[] {
    return this.catalog.getProductsByCategory(slug);
  }

  getProductCountByCategory(slug: string): number {
    return this.catalog.getProductCountByCategory(slug);
  }
}
