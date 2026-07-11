import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { EnterpriseUiState } from '../../../../contact/application/models/contact.view-models';

type SignUpFormGroup = FormGroup<{
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  phone: FormControl<string>;
  agreeUpdates: FormControl<boolean>;
}>;

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
  /** Reactive form group config for sign up account creation validation */
  readonly form: SignUpFormGroup = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    phone: new FormControl('', { nonNullable: true }),
    agreeUpdates: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  /** Submit status tracking matching standard enterprise states */
  readonly submitStatus = signal<EnterpriseUiState>('Empty');

  /**
   * Submits the form data, validates inputs, and updates status state.
   */
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitStatus.set('Loading');

    // Simulate standard async server creation latency
    setTimeout(() => {
      this.submitStatus.set('Success');
      this.form.reset();
    }, 800);
  }

  /**
   * Helper utility to check if a specific control has validation errors
   * after the user interacted with it or submitted.
   * @param controlName Name of form control
   */
  hasError(controlName: keyof SignUpFormGroup['controls']): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }
}
