import { Injectable, inject } from '@angular/core';

import { ProductCatalogService } from '../../../../core/services/product-catalog.service';

import {
  HomeCategoryViewModel,
  HomeInstagramViewModel,
  HomeProductViewModel,
} from '../models/home.view-models';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  private readonly catalog = inject(ProductCatalogService);

  readonly categories: HomeCategoryViewModel[] = this.catalog.categories.map((category) => ({
    name: category.name,
    slug: category.slug,
    imageUrl: category.imageUrl,
  }));

  readonly newestProducts: HomeProductViewModel[] = this.catalog
    .getNewestProducts(5)
    .map((product) => ({
      name: product.name,
      slug: product.slug,
      price: `$${product.price.toFixed(2)}`,
      imageUrl: product.imageUrl,
    }));

  readonly instagramImages: HomeInstagramViewModel[] = [
    {
      imageUrl: 'assets/images/products/tomato.webp',
      alt: 'Fresh tomatoes',
    },
    {
      imageUrl: 'assets/images/products/cucumber.webp',
      alt: 'Fresh cucumber',
    },
    {
      imageUrl: 'assets/images/products/mint.webp',
      alt: 'Fresh mint',
    },
    {
      imageUrl: 'assets/images/products/orange.webp',
      alt: 'Fresh orange',
    },
    {
      imageUrl: 'assets/images/products/pineapple.webp',
      alt: 'Fresh pineapple',
    },
    {
      imageUrl: 'assets/images/products/strawberries.webp',
      alt: 'Fresh strawberries',
    },
  ];
}
