import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../../Store/AppState.model';
import { ProductsSelectors, ProductsActions } from '../../../../../Store';

@Component({
  selector: 'search-box',
  templateUrl: './SearchBox.component.html',
  styleUrls: [ './SearchBox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchBox {
    keyword: FormControl = new FormControl();
    filter$: Observable<string>;

    constructor(private store$: Store<AppState>){
        this.keyword.valueChanges
                  .pipe(debounceTime(1000))
							   .subscribe((keyword: string) => {
            this.filterByText(keyword);
        });
        
        this.filter$ = this.store$.select (
			ProductsSelectors.getFilter,
        )
    }

    filterByText(text: string): void {        
        this.store$.dispatch(
			new ProductsActions.Filter({
                text: text
            })
        );
    }
}
