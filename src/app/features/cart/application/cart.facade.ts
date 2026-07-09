import { computed, Injectable, signal } from '@angular/core';

import { Product } from '../../../core/models/catalog.models';
import { CartLine } from '../domain/cart.models';

@Injectable({ providedIn: 'root' })
export class CartFacade {
  readonly isDrawerOpen = signal(false);

  private readonly linesSignal = signal<CartLine[]>([]);

  readonly lines = computed(() => this.linesSignal());

  readonly itemCount = computed(() =>
    this.lines().reduce((total, line) => total + line.quantity, 0),
  );

  readonly total = computed(() =>
    this.lines().reduce((total, line) => total + line.quantity * line.unitPrice, 0),
  );

  openDrawer(): void {
    this.isDrawerOpen.set(true);
  }

  closeDrawer(): void {
    this.isDrawerOpen.set(false);
  }

  addProduct(product: Product): void {
    this.linesSignal.update((lines) => {
      const existingLine = lines.find((line) => line.id === product.id);

      if (existingLine) {
        return lines.map((line) =>
          line.id === product.id ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }

      return [
        ...lines,
        {
          id: product.id,
          name: product.name,
          imageUrl: product.imageUrl,
          quantity: 1,
          unitPrice: product.price,
        },
      ];
    });
  }

  increaseQuantity(lineId: string): void {
    this.linesSignal.update((lines) =>
      lines.map((line) =>
        line.id === lineId ? { ...line, quantity: line.quantity + 1 } : line,
      ),
    );
  }

  decreaseQuantity(lineId: string): void {
    this.linesSignal.update((lines) =>
      lines
        .map((line) =>
          line.id === lineId ? { ...line, quantity: line.quantity - 1 } : line,
        )
        .filter((line) => line.quantity > 0),
    );
  }
}
