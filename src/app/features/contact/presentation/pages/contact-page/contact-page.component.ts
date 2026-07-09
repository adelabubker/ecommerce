import { Component } from '@angular/core';

import { ContactFacade } from '../../../application/facades/contact.facade';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  constructor(readonly contact: ContactFacade) {}
}