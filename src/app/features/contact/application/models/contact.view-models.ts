export interface ContactInfoItemViewModel {
  readonly label: string;
  readonly value: string;
  readonly icon: string;
  readonly href?: string;
  readonly opensInNewTab?: boolean;
}

export interface ContactSubmitStateViewModel {
  readonly status: 'idle' | 'success' | 'error';
  readonly message: string;
}
