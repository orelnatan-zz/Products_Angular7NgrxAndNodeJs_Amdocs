import { Actions, ActionTypes } from './Actions';
import { ProductsState } from './ProductsState.model';
import { Product } from '../../Shop/Models/Product.model';

const initialState: ProductsState = {
	products: [],
    inProgress: false,
    failure: false,
    view: "grid",
    type: '*',
    sort: 'desc',
    filter: null,
}

export function ProductsReducer(state = initialState, action: Actions): ProductsState {    
    switch(action.type){
        case ActionTypes.LOAD: {
            return {
                ... state,
                inProgress: true,
            };
        };
        case ActionTypes.READY: {
            let products: Array<Product> = action.payload.products;

            products = filterByType(products, state.type);
            products = filterByText(products, state.filter);
            products = sortByDirection(products, state.sort);

            return {
                ... state,
                inProgress: false,
                failure: false,
                products: products
            };
        };
        case ActionTypes.REJECTED: {
            return {
                ... state,
                failure: true
            };
        };
        case ActionTypes.TYPE: {
            return {
                ... state,
                type: action.payload.type,
                inProgress: true
            };
        };
        case ActionTypes.SORT: {
            return {
                ... state,
                sort: action.payload.sort,
                inProgress: true
            };
        };
        case ActionTypes.FILTER: {
            return {
                ... state,
                filter: action.payload.text,
                inProgress: true
            };
        };
        case ActionTypes.DELETE: {
            return {
                ... state,
                inProgress: true
            };
        };
        case ActionTypes.VIEW: {
            return {
                ... state,
                view: action.payload.mode
            };
        };
        case ActionTypes.UPDATE: {
            return {
                ... state,
                inProgress: true
            };
        };
        case ActionTypes.REFRESH: {
            return {
                ... initialState,
            };
        };
        default: {
            return {
                ... state
            };
        };
    }
}


function filterByType(products: Array<Product>, type: string): Array<Product> {
    return type == "*" ? products : products.filter((product: Product) => {
        return product.Type == type;
    })
}

function filterByText(products: Array<Product>, text: string): Array<Product> {
    return text ? products.filter((product: Product) => {
        return product.Title.toLocaleUpperCase().includes(text.toUpperCase()); 
    }) : products;
}

function sortByDirection(products: Array<Product>, direction: string): Array<Product> {
    return products.sort((arg1, arg2) => {
        const title1 = isNaN ? arg1.Title.toUpperCase() : arg1.Title; 
        const title2 = isNaN ? arg2.Title.toUpperCase() : arg2.Title;
        const action = direction == 'desc' ? ((title1 < title2) ? -1 : ((title1 > title2) ? 1 : 0)) : ((title1 > title2) ? -1 : ((title1 < title2) ? 1 : 0));
        return action;
    });
}