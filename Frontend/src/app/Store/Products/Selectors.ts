import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './ProductsState.model';
import { Product } from '../../Shop/Models/Product.model';

export const getProductsState = createFeatureSelector<ProductsState>('Products');

export const getAllProducts = createSelector(
    getProductsState,
    (state: ProductsState): Array<Product> => {
        return state.products;
    }
);

export const getProductsInProgress = createSelector(
    getProductsState,
    (state: ProductsState): boolean => {
        return state.inProgress;
    }
);

export const getProductsFailure = createSelector(
    getProductsState,
    (state: ProductsState): boolean => {
        return state.failure;
    }
);

export const getView = createSelector(
    getProductsState,
    (state: ProductsState): string => {
        return state.view;
    }
);

export const getType = createSelector(
    getProductsState,
    (state: ProductsState): string => {
        return state.type;
    }
);

export const getSort = createSelector(
    getProductsState,
    (state: ProductsState): string => {
        return state.sort;
    }
);

export const getFilter = createSelector(
    getProductsState,
    (state: ProductsState): string => {
        return state.filter;
    }
);
