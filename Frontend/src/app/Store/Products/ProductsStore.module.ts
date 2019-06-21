import { CommonModule, AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsReducer } from './Reducer';
import { ProductsEffects } from './Effects';
import { Products } from '../../Shop/Services/Products.service';

@NgModule({
    imports: [
      CommonModule,
      StoreModule.forFeature('Products', ProductsReducer),
      EffectsModule.forFeature([ ProductsEffects ]),
    ],
    providers: [ ProductsEffects, Products ]
})
export class ProductsStoreModule {

}
