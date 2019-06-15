import { Component, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../../Store/AppState.model';
import { ProductsSelectors } from '../../../../../Store';

@Component({
  selector: 'search-box',
  templateUrl: './SearchBox.component.html',
  styleUrls: [ './SearchBox.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class SearchBox {
    @ViewChild('boxReference') boxReference: ElementRef;
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    
    value: FormControl = new FormControl();
   
    sort$: Observable<string>;
    filter$: Observable<string>;

    constructor(private store$: Store<AppState>,){
        this.value.valueChanges
                  .pipe(debounceTime(600))
							   .subscribe((value: string) => {
			this.onChange.emit(value);
        });
        
        this.filter$ = this.store$.select (
			ProductsSelectors.getFilter,
        )
    }

    clear(): void {
        this.onChange.emit(null);
    }
}
