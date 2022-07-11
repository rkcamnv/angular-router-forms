import {IProduct} from "./product";
import {ICategory, ICategoryDetail} from "./category";

export interface IProductResponse {
  data: IProduct[];
  status: number;
  message: string;
}

export interface ICategoryResponse {
  data: ICategory[];
  status: number;
  message: string;
}

export interface ICategoryDetailResponse {
  data: ICategoryDetail;
  status: number;
  message: string;
}
