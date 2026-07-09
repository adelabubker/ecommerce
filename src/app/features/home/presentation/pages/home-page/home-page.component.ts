import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomeFacade } from '../../facades/home.facade';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(readonly home: HomeFacade) {}
}