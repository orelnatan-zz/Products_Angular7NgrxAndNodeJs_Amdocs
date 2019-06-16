import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { ProductsActions, } from '../../../Store';
import { AppState } from '../../../Store/AppState.model';

@Component({
  selector: 'home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
}
