import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Product } from '../../../../../core/models/catalog.models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
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
