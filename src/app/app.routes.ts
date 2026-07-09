import { Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/presentation/pages/home-page/home-page.component').then(
            (m) => m.HomePageComponent,
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/presentation/pages/about-page/about-page.component').then(
            (m) => m.AboutPageComponent,
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/presentation/pages/contact-page/contact-page.component').then(
            (m) => m.ContactPageComponent,
          ),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import(
            './features/favorites/presentation/pages/favorites-page/favorites-page.component'
          ).then((m) => m.FavoritesPageComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./features/cart/presentation/pages/cart-page/cart-page.component').then(
            (m) => m.CartPageComponent,
          ),
      },
      {
        path: 'account',
        pathMatch: 'full',
        redirectTo: 'sign-in',
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./features/account/presentation/pages/sign-in-page/sign-in-page.component').then(
            (m) => m.SignInPageComponent,
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./features/account/presentation/pages/sign-up-page/sign-up-page.component').then(
            (m) => m.SignUpPageComponent,
          ),
      },
      {
        path: 'shop',
        loadComponent: () =>
          import('./features/shop/presentation/pages/shop-page/shop-page.component').then(
            (m) => m.ShopPageComponent,
          ),
      },
      {
        path: 'shop/category/:categorySlug',
        loadComponent: () =>
          import('./features/shop/presentation/pages/shop-page/shop-page.component').then(
            (m) => m.ShopPageComponent,
          ),
      },
      {
        path: 'shop/product/:productSlug',
        loadComponent: () =>
          import(
            './features/shop/presentation/pages/product-details-page/product-details-page.component'
          ).then((m) => m.ProductDetailsPageComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
