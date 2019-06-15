import { Component, OnInit, ViewEncapsulation,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsActions, ProductsSelectors } from '../../../Store';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from '../../../Store/AppState.model';
import { Product } from '../../Models/Product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-view',
  templateUrl: './ProductView.component.html',
  styleUrls: ['./ProductView.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,  
})

export class ProductView implements OnInit {
    inProgress$: Observable<boolean>;
    product: Product = {} as Product;

    constructor(
        private store$: Store<AppState>,
        private router: Router,
        private activatedRoute: ActivatedRoute,
      ) {
          this.store$.select (
			ProductsSelectors.getAllProducts,
          ).subscribe((products: Array<Product>) => {
                this.product = products[0];
          });

          this.inProgress$ = this.store$.select (
			    ProductsSelectors.getProductsInProgress,
          );
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: {imdbID: string}) => {
            this.store$.dispatch(
                new ProductsActions.Load({
                    imdbID: params.imdbID
                })
            );   
        })
    }

    handleSubmit(product: Product): void {
        this.store$.dispatch(
			new ProductsActions.Update({
                product
            })
        );
    }

    navigateBackHome(): void {
        this.router.navigate(['/Home']);
    }
}
