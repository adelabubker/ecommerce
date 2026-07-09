import { Injectable } from '@angular/core';

import { Product, ProductCategory } from '../models/catalog.models';

@Injectable({ providedIn: 'root' })
export class ProductCatalogService {
  readonly categories: ProductCategory[] = [
    {
      name: 'Vegetables',
      slug: 'vegetables',
      imageUrl: 'assets/images/categories/vegetable.webp',
      description: 'Crisp everyday vegetables selected for fresh home cooking.',
    },
    {
      name: 'Fresh Fruit',
      slug: 'fresh-fruit',
      imageUrl: 'assets/images/categories/fruits.webp',
      description: 'Bright seasonal fruit for snacks, juices, and family tables.',
    },
    {
      name: 'Dry Fruits',
      slug: 'dry-fruits',
      imageUrl: 'assets/images/categories/dry-fruits.webp',
      description: 'Pantry-friendly fruit picks with a naturally sweet finish.',
    },
    {
      name: 'Leafy Green',
      slug: 'leafy-green',
      imageUrl: 'assets/images/categories/leafy-green.webp',
      description: 'Fresh greens for salads, sides, and healthy daily meals.',
    },
    {
      name: 'Organic',
      slug: 'organic',
      imageUrl: 'assets/images/categories/organic.webp',
      description: 'Carefully selected organic groceries and clean ingredients.',
    },
    {
      name: 'Tea',
      slug: 'tea',
      imageUrl: 'assets/images/categories/tea.webp',
      description: 'Comforting tea and natural drinks for slower moments.',
    },
  ];

  readonly products: Product[] = [
    {
      id: 'green-apple',
      name: 'Green Apple',
      slug: 'green-apple',
      categorySlug: 'fresh-fruit',
      categoryName: 'Fresh Fruit',
      imageUrl: 'assets/images/products/apple.webp',
      price: 14.99,
      unit: 'كيلو',
      summary: 'Crunchy green apples with a clean, tart sweetness.',
      inStock: true,
    },
    {
      id: 'banana',
      name: 'Banana',
      slug: 'banana',
      categorySlug: 'fresh-fruit',
      categoryName: 'Fresh Fruit',
      imageUrl: 'assets/images/products/banana.webp',
      price: 8.5,
      unit: 'كيلو',
      summary: 'Naturally sweet bananas ready for breakfast and smoothies.',
      inStock: true,
    },
    {
      id: 'mango',
      name: 'Mango',
      slug: 'mango',
      categorySlug: 'fresh-fruit',
      categoryName: 'Fresh Fruit',
      imageUrl: 'assets/images/products/mango.webp',
      price: 18.25,
      unit: 'كيلو',
      summary: 'Juicy mangoes with a rich tropical flavor.',
      inStock: true,
    },
    {
      id: 'orange',
      name: 'Orange',
      slug: 'orange',
      categorySlug: 'fresh-fruit',
      categoryName: 'Fresh Fruit',
      imageUrl: 'assets/images/products/orange.webp',
      price: 9.75,
      unit: 'كيلو',
      summary: 'Fresh oranges with a bright citrus finish.',
      inStock: true,
    },
    {
      id: 'pineapple',
      name: 'Pineapple',
      slug: 'pineapple',
      categorySlug: 'fresh-fruit',
      categoryName: 'Fresh Fruit',
      imageUrl: 'assets/images/products/pineapple.webp',
      price: 16.5,
      unit: 'قطعة',
      summary: 'Sweet pineapple for desserts, juices, and fruit bowls.',
      inStock: true,
    },
    {
      id: 'strawberries',
      name: 'Strawberries',
      slug: 'strawberries',
      categorySlug: 'fresh-fruit',
      categoryName: 'Fresh Fruit',
      imageUrl: 'assets/images/products/strawberries.webp',
      price: 11.99,
      unit: 'علبة',
      summary: 'Fresh strawberries packed for snacking and desserts.',
      inStock: true,
    },
    {
      id: 'tomato',
      name: 'Tomato',
      slug: 'tomato',
      categorySlug: 'vegetables',
      categoryName: 'Vegetables',
      imageUrl: 'assets/images/products/tomato.webp',
      price: 5.25,
      unit: 'كيلو',
      summary: 'Ripe tomatoes for salads, sauces, and daily meals.',
      inStock: true,
    },
    {
      id: 'cucumber',
      name: 'Cucumber',
      slug: 'cucumber',
      categorySlug: 'vegetables',
      categoryName: 'Vegetables',
      imageUrl: 'assets/images/products/cucumber.webp',
      price: 4.75,
      unit: 'كيلو',
      summary: 'Cool cucumbers with a crisp, refreshing bite.',
      inStock: true,
    },
    {
      id: 'carrot',
      name: 'Carrot',
      slug: 'carrot',
      categorySlug: 'vegetables',
      categoryName: 'Vegetables',
      imageUrl: 'assets/images/products/carrot.webp',
      price: 6.5,
      unit: 'كيلو',
      summary: 'Sweet carrots for soups, salads, and roasting.',
      inStock: true,
    },
    {
      id: 'potato',
      name: 'Potato',
      slug: 'potato',
      categorySlug: 'vegetables',
      categoryName: 'Vegetables',
      imageUrl: 'assets/images/products/potato.webp',
      price: 3.99,
      unit: 'كيلو',
      summary: 'Reliable potatoes for baking, frying, and home cooking.',
      inStock: true,
    },
    {
      id: 'onion',
      name: 'Onion',
      slug: 'onion',
      categorySlug: 'vegetables',
      categoryName: 'Vegetables',
      imageUrl: 'assets/images/products/onion.webp',
      price: 3.5,
      unit: 'كيلو',
      summary: 'Fresh onions for everyday flavor foundations.',
      inStock: true,
    },
    {
      id: 'spinach',
      name: 'Spinach',
      slug: 'spinach',
      categorySlug: 'leafy-green',
      categoryName: 'Leafy Green',
      imageUrl: 'assets/images/products/spinach.webp',
      price: 7.25,
      unit: 'ربطة',
      summary: 'Tender spinach leaves for salads and warm dishes.',
      inStock: true,
    },
    {
      id: 'lettuce',
      name: 'Lettuce',
      slug: 'lettuce',
      categorySlug: 'leafy-green',
      categoryName: 'Leafy Green',
      imageUrl: 'assets/images/products/lettuce.webp',
      price: 6.99,
      unit: 'علبة',
      summary: 'Fresh lettuce with crisp leaves for simple salads.',
      inStock: true,
    },
    {
      id: 'mint',
      name: 'Mint',
      slug: 'mint',
      categorySlug: 'leafy-green',
      categoryName: 'Leafy Green',
      imageUrl: 'assets/images/products/mint.webp',
      price: 2.75,
      unit: 'ربطة',
      summary: 'Fragrant mint for tea, salads, and fresh drinks.',
      inStock: true,
    },
    {
      id: 'coriander',
      name: 'Coriander',
      slug: 'coriander',
      categorySlug: 'leafy-green',
      categoryName: 'Leafy Green',
      imageUrl: 'assets/images/products/coriander.webp',
      price: 2.5,
      unit: 'ربطة',
      summary: 'Aromatic coriander for bright finishing flavor.',
      inStock: true,
    },
    {
      id: 'dried-fruit-mix',
      name: 'Dried Fruit Mix',
      slug: 'dried-fruit-mix',
      categorySlug: 'dry-fruits',
      categoryName: 'Dry Fruits',
      imageUrl: 'assets/images/categories/dry-fruits.webp',
      price: 13.5,
      unit: 'علبة',
      summary: 'A naturally sweet dried fruit mix for snacks and lunch boxes.',
      inStock: true,
    },
    {
      id: 'organic-greens-box',
      name: 'Organic Greens Box',
      slug: 'organic-greens-box',
      categorySlug: 'organic',
      categoryName: 'Organic',
      imageUrl: 'assets/images/categories/organic.webp',
      price: 19.99,
      unit: 'علبة',
      summary: 'A balanced organic produce box for simple weekly meals.',
      inStock: true,
    },
    {
      id: 'mint-tea-bundle',
      name: 'Mint Tea Bundle',
      slug: 'mint-tea-bundle',
      categorySlug: 'tea',
      categoryName: 'Tea',
      imageUrl: 'assets/images/categories/tea.webp',
      price: 10.75,
      unit: 'ربطة',
      summary: 'A fresh mint tea bundle for warm cups and cool infusions.',
      inStock: true,
    },
    {
      id: 'organic-drink',
      name: 'Organic Drink',
      slug: 'organic-drink',
      categorySlug: 'tea',
      categoryName: 'Tea',
      imageUrl: 'assets/images/products/organic-drink.webp',
      price: 12.99,
      unit: 'زجاجة',
      summary: 'A refreshing organic drink made for easy daily wellness.',
      inStock: true,
    },
  ];

  getProductsByCategory(categorySlug: string | null): Product[] {
    if (!categorySlug) {
      return this.products;
    }

    return this.products.filter((product) => product.categorySlug === categorySlug);
  }

  getCategoryBySlug(categorySlug: string | null): ProductCategory | undefined {
    if (!categorySlug) {
      return undefined;
    }

    return this.categories.find((category) => category.slug === categorySlug);
  }

  getNewestProducts(limit: number): Product[] {
    const newestProductSlugs = [
      'green-apple',
      'spinach',
      'lettuce',
      'tomato',
      'carrot',
      'mint-tea-bundle',
    ];

    return newestProductSlugs
      .map((slug) => this.products.find((product) => product.slug === slug))
      .filter((product): product is Product => Boolean(product))
      .slice(0, limit);
  }

  getProductCountByCategory(categorySlug: string): number {
    return this.products.filter((product) => product.categorySlug === categorySlug).length;
  }
}
