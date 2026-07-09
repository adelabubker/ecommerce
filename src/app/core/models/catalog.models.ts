export interface ProductCategory {
  readonly name: string;
  readonly slug: string;
  readonly imageUrl: string;
  readonly description: string;
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly categorySlug: string;
  readonly categoryName: string;
  readonly imageUrl: string;
  readonly price: number;
  readonly unit: string;
  readonly summary: string;
  readonly description?: string;
  readonly galleryImages?: readonly string[];
  readonly inStock: boolean;
}
