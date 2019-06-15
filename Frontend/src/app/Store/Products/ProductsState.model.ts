import { Product } from "../../Shop/Models/Product.model";

export interface ProductsState {
	products: Array<Product>,
    inProgress: boolean,
    failure: boolean,
    view: string,
    type: string,
    sort: string,
    filter: string,
}