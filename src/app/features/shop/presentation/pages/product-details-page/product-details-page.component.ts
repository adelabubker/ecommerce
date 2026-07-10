import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Product } from '../../../../../core/models/catalog.models';
import { CartFacade } from '../../../../cart/application/cart.facade';
import { ShopFacade } from '../shop-page/shop-page.component';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss',
})
export class ProductDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly shop = inject(ShopFacade);
  readonly cart = inject(CartFacade);
  readonly selectedImage = signal<string | null>(null);

  readonly productSlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('productSlug'))),
    {
      initialValue: this.route.snapshot.paramMap.get('productSlug'),
    },
  );

  readonly product = computed(() =>
    this.shop.allProducts.find((product) => product.slug === this.productSlug()),
  );

  readonly activeImage = computed(() => {
    const product = this.product();

    if (!product) {
      return '';
    }

    const selectedImage = this.selectedImage();
    const galleryImages = this.getGalleryImages(product);

    return selectedImage && galleryImages.includes(selectedImage) ? selectedImage : product.imageUrl;
  });

  getDescription(product: Product): string {
    return (
      product.description ??
      `${product.summary} Carefully selected for Kosa customers with fresh handling, clean packing, and reliable quality for daily home use.`
    );
  }

  getGalleryImages(product: Product): string[] {
    const categoryImage =
      this.shop.getCategoryBySlug(product.categorySlug)?.imageUrl ?? product.imageUrl;

    return [
      product.imageUrl,
      ...(product.galleryImages ?? [
        categoryImage,
        'assets/images/about/about-plant.webp',
        'assets/images/hero/organic-food.png',
      ]),
    ].slice(0, 4);
  }

  selectImage(imageUrl: string): void {
    this.selectedImage.set(imageUrl);
  }

  addToCart(product: Product): void {
    this.cart.addProduct(product);
    this.cart.openDrawer();
  }
}
