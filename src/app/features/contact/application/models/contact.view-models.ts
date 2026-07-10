export interface ContactInfoItemViewModel {
  readonly label: string;
  readonly value: string;
  readonly icon: string;
  readonly href?: string;
  readonly opensInNewTab?: boolean;
}

export type EnterpriseUiState = 'Loading' | 'Success' | 'Empty' | 'Error' | 'Offline';

export interface ContactSubmitStateViewModel {
  readonly status: EnterpriseUiState;
  readonly message: string;
}
