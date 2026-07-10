import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { CartFacade } from '../features/cart/application/cart.facade';
import { FavoritesFacade } from '../features/favorites/application/favorites.facade';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CurrencyPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  constructor(
    readonly cart: CartFacade,
    readonly favorites: FavoritesFacade,
  ) {}
}
