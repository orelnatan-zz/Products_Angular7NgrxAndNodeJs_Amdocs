import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { ProductsActions, } from '../../../Store';
import { AppState } from '../../../Store/AppState.model';
import { Update } from '../../Models/Update.model';
import { Product } from '../../Models/Product.model';

@Component({
  selector: 'home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class Home implements OnInit {
    constructor(
        private store$: Store<AppState>,
        private router: Router
    ){}

    ngOnInit(): void {
        this.store$.dispatch(
			new ProductsActions.Load({})
        );
    }

    navigateToProductPage(imdbID: string): void {
        this.router.navigate(['/Product-view' ], {
            queryParams: {
                imdbID: imdbID,
            }
        })
    }

    handleUpdate(product: Product): void {
        this.store$.dispatch(              
			new ProductsActions.Update({
                product
            })
        )            
    }
}
