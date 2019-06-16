import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../Models/Product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../Store/AppState.model';
import { ProductsSelectors, ProductsActions } from '../../../Store';

@Component({
  selector: 'products-list',
  templateUrl: './ProductsList.component.html',
  styleUrls: ['./ProductsList.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsList {
    @Output() onSelect: EventEmitter<string> = new EventEmitter();

    products$: Observable<Product[]>;
    view$: Observable<string>;

    constructor(
        private store$: Store<AppState>,
    ){
        this.products$ = this.store$.select (
			ProductsSelectors.getAllProducts,
        )

        this.view$ = this.store$.select (
			ProductsSelectors.getView,
        );
    }

    handleDelete(imdbID: string): void {
        this.store$.dispatch(              
			new ProductsActions.Delete({
                imdbID
            })
        )    
    }
    

}
