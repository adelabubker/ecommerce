import { Component } from '@angular/core';

import { AboutFacade } from '../../facades/about.facade';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  constructor(readonly about: AboutFacade) {}
}