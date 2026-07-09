export interface HomeCategoryViewModel {
  readonly name: string;
  readonly slug: string;
  readonly imageUrl: string;
}

export interface HomeProductViewModel {
  readonly name: string;
  readonly slug: string;
  readonly price: string;
  readonly imageUrl: string;
}

export interface HomeInstagramViewModel {
  readonly imageUrl: string;
  readonly alt: string;
}