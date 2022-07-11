export interface IProduct {
  _id: string;
  title: string;
  price: number;
  category: IProductCategory;
  description: string;
  createdBy: IProductCreateBy | string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  image?: string;
}

export interface IProductCategory{
  _id: string;
  name: string;
  slug: string;
}

export interface IProductCreateBy {
  role: string;
  _id: string;
  name: string;
}
