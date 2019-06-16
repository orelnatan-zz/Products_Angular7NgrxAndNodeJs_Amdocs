import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductsSelectors, ProductsActions } from '../../../Store';
import { AppState } from '../../../Store/AppState.model';

@Component({
  selector: 'header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Header {
    view$: Observable<string>;
    type$: Observable<string>;
    sort$: Observable<string>;

    constructor(
        private store$: Store<AppState>,
    ){
        this.view$ = this.store$.select (
			ProductsSelectors.getView,
        );

        this.type$ = this.store$.select (
			ProductsSelectors.getType,
        );

        this.sort$ = this.store$.select (
			ProductsSelectors.getSort,
        );
    }

    refresh(): void {
        this.store$.dispatch(
			new ProductsActions.Refresh()
        );
    }

    transformView(mode: string): void {
        this.store$.dispatch(
			new ProductsActions.View({
                mode: mode
            })
        );
    }

    filterByText(text: string): void {        
        this.store$.dispatch(
			new ProductsActions.Filter({
                text: text
            })
        );
    }

    filterByType(type: string): void {        
        this.store$.dispatch(
			new ProductsActions.Type({
                type: type
            })
        );
    }

    changeSortDirection(direction: string): void {
        this.store$.dispatch(
			new ProductsActions.Sort({
                sort: direction
            })
        );
    }
}
