import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, startWith, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Products } from '../../Shop/Services/Products.service';
import * as ProductsActions from './Actions';

import { Product } from '../../Shop/Models/Product.model';
import { AppState } from '../AppState.model';

@Injectable()
export class ProductsEffects {
    constructor(
        private products: Products,
        private actions$: Actions,
        private store$: Store<AppState>,
        private router: Router
    ){}

    @Effect()
    Load$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.Load>(
            ProductsActions.ActionTypes.LOAD
		),
		switchMap((action: ProductsActions.Load): Observable<Action> => {
            const observer: Observable<Product[] | Error> = action.payload.imdbID ? this.products.getProductById(action.payload.imdbID) :
                                                                                    this.products.getAllProducts();
			return observer.pipe(
				map((products: Array<Product>): ProductsActions.Ready => {
                    return new ProductsActions.Ready({
                        products: products,
					})
				}),
				catchError(() => {
					return observableOf(new ProductsActions.Rejected())
				})
			)
		})
    );

    @Effect()
    Delete$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.Delete>(
            ProductsActions.ActionTypes.DELETE
		),
		switchMap((action: ProductsActions.Delete): Observable<Action> => {
			return this.products.deleteProductById(action.payload.imdbID).pipe(
				map((): ProductsActions.Load => {
                    return new ProductsActions.Load({})
				}),
				catchError(() => {
					return observableOf(new ProductsActions.Rejected())
				})
			)
		})
    );

    @Effect()
    Update$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.Update>(
            ProductsActions.ActionTypes.UPDATE
		),
		switchMap((action: ProductsActions.Update): Observable<Action> => {
			return this.products.updateProduct(action.payload.product).pipe(
				map((): ProductsActions.Load => {
                    this.router.navigate(['/Home']);
                    return new ProductsActions.Load({})
				}),
				catchError(() => {
					return observableOf(new ProductsActions.Rejected())
				})
			)
		})
    );

    @Effect({ dispatch: false })
	Data$: Observable<Action> = this.actions$.pipe(
		ofType<ProductsActions.Type | ProductsActions.Sort | ProductsActions.Filter | ProductsActions.Refresh>(
            ProductsActions.ActionTypes.TYPE,
            ProductsActions.ActionTypes.SORT,
            ProductsActions.ActionTypes.FILTER,
            ProductsActions.ActionTypes.REFRESH,
		),
		tap(() => {
            this.store$.dispatch(
                new ProductsActions.Load({}),
            );
		})
    );
    
   
}