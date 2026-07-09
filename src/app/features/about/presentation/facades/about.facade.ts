import { Injectable } from '@angular/core';

import { AboutContentViewModel } from '../models/about-content.model';

@Injectable({ providedIn: 'root' })
export class AboutFacade {
  readonly content: AboutContentViewModel = {
    introTitle: '100% Trusted Organic Food Store',
    introDescription:
      'We are committed to delivering fresh, natural, and high-quality organic products that you can rely on. Every item is carefully selected to support a healthy lifestyle and give families access to food that is grown with care.',
    introImageUrl: 'assets/images/about/about-farm.webp',

    storyTitle: '100% Trusted Organic Food Store',
    storyDescription:
      'Fresh, local, and healthy products are at the heart of our store. We work with trusted growers to bring organic produce, clean ingredients, and everyday grocery essentials to your home.',
    storyImageUrl: 'assets/images/about/about-plant.webp',

    features: [
      {
        title: '100% Organic Food',
        description: 'Fresh organic products from trusted sources.',
      },
      {
        title: 'Fresh Local Products',
        description: 'Carefully selected products delivered with quality.',
      },
      {
        title: '100% Organic Food',
        description: 'Healthy products for everyday meals.',
      },
      {
        title: '100% Secure Payment',
        description: 'Safe checkout experience for every order.',
      },
    ],

    teamMembers: [
      {
        name: 'Jenny Wilson',
        role: 'Team Member',
      },
      {
        name: 'Robert Fox',
        role: 'Team Member',
      },
      {
        name: 'Jane Cooper',
        role: 'Team Member',
      },
    ],
  };
}