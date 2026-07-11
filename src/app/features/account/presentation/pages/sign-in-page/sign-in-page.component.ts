import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { EnterpriseUiState } from '../../../../contact/application/models/contact.view-models';

type SignInFormGroup = FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
  rememberMe: FormControl<boolean>;
}>;

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss',
})
export class SignInPageComponent {
  /** Reactive form group config for sign in credentials validation */
  readonly form: SignInFormGroup = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    rememberMe: new FormControl(false, { nonNullable: true }),
  });

  /** Submit status tracking matching standard enterprise states */
  readonly submitStatus = signal<EnterpriseUiState>('Empty');

  /**
   * Submits the credentials, validates controls, and updates status state.
   */
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitStatus.set('Loading');

    // Simulate standard async auth latency
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
  hasError(controlName: keyof SignInFormGroup['controls']): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }
}
