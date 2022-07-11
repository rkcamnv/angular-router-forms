import {IProduct} from "./product";

interface ICategoryBase {
  _id: string;
  name: string;
  slug: string;
}

export interface ICategory extends ICategoryBase{
  products: string[];
}

export interface ICategoryDetail extends ICategoryBase{
  products: IProduct[];
}
