import { Injectable, signal } from '@angular/core';

import { ContactInfoItemViewModel, ContactSubmitStateViewModel } from '../models/contact.view-models';

@Injectable({ providedIn: 'root' })
export class ContactFacade {
  readonly contactInfo: ContactInfoItemViewModel[] = [
    {
      label: 'Address',
      value: 'Amman, Tla Al Ali',
      icon: 'pin',
      href: 'https://www.google.com/maps/search/?api=1&query=Tla%20Al%20Ali%2C%20Amman%2C%20Jordan',
      opensInNewTab: true,
    },
    {
      label: 'Email',
      value: 'info@gmail.com',
      icon: 'mail',
      href: 'mailto:info@gmail.com',
    },
    {
      label: 'Phone',
      value: '+962 7 8000 0010',
      icon: 'phone',
      href: 'tel:+962780000000',
    },
  ];

  readonly submitState = signal<ContactSubmitStateViewModel>({
    status: 'idle',
    message: '',
  });

  submitMessage(): void {
    this.submitState.set({
      status: 'success',
      message: 'Your message was sent successfully.',
    });
  }
}
