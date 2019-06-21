import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../Core/Core.module';
import { SharedModule } from '../Shared/Shared.module';
import { ShopRoutingModule } from './Shop.routing';

import { Products } from './Services/Products.service';

import { Home } from './Pages/Home/Home.component';
import { ProductView } from './Pages/ProductView/ProductView.component';
import { ProductsList } from './Components/ProductsList/ProductsList.component';
import { ProductEntity } from './Components/ProductsList/Components/ProductEntity/ProductEntity.component';
import { ProductBox } from './Components/ProductsList/Components/ProductEntity/Components/ProductBox/ProductBox.component';
import { ProductRow } from './Components/ProductsList/Components/ProductEntity/Components/ProductRow/ProductRow.component';

import { ProductDate } from './Components/ProductsList/Components/ProductEntity/Pips/ProductDate.pipe';


@NgModule({
    declarations: [
        Home,
        ProductView,
        ProductsList,
        ProductEntity,
        ProductBox,
        ProductRow,
        ProductDate
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule,
        ShopRoutingModule
    ],
    exports: [
        Home,
        ProductView,
        ProductsList,
        ProductEntity,
        ProductBox,
        ProductRow,
        ProductDate
    ],
})
export class ShopModule {}