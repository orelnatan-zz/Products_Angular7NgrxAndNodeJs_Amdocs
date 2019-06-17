import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { RoutingModule } from './RoutingModule.module';
import { AppStoreModule as StorModule } from './Store/AppStore.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { Products } from './Shop/Services/Products.service';

import { Selected } from './Core/Components/Header/Directives/Selected/Selected.directive';
import { Tooltip } from './Core/Directives/Tooltip/Tooltip.directive';


import { ToCalenderFormat } from './Frequent/Components/InputDate/Pips/ToCalenderFormat.pipe';
import { ToUnixFormat } from './Frequent/Components/InputDate/Pips/ToUnixFormat.pipe';
import { ProductDate } from './Shop/Components/ProductsList/Components/ProductEntity/Pips/ProductDate.pipe';

import { AppRoot } from './Core/Components/AppRoot/AppRoot.component';
import { Home } from './Shop/Pages/Home/Home.component';
import { Header } from './Core/Components/Header/Header.component';
import { SearchBox } from './Core/Components/Header/Components/SearchBox/SearchBox.component';
import { ProductsList } from './Shop/Components/ProductsList/ProductsList.component';
import { ProductEntity } from './Shop/Components/ProductsList/Components/ProductEntity/ProductEntity.component';
import { ProductBox } from './Shop/Components/ProductsList/Components/ProductEntity/Components/ProductBox/ProductBox.component';
import { ProductRow } from './Shop/Components/ProductsList/Components/ProductEntity/Components/ProductRow/ProductRow.component';
import { ProductView } from './Shop/Pages/ProductView/ProductView.component';
import { ErrorAlert } from './Frequent/Components/ErrorAlert/ErrorAlert.component';
import { Loader } from './Frequent/Components/Loader/Loader.component';
import { PageNotFound } from './Core/Pages/PageNotFound/PageNotFound.component';
import { InputText } from './Frequent/Components/InputText/InputText.component';
import { InputSelect } from './Frequent/Components/InputSelect/InputSelect.component';
import { InputDate } from './Frequent/Components/InputDate/InputDate.component';

@NgModule({
  declarations: [
    AppRoot,
    Home,
    Header,
    SearchBox,
    ProductsList,
    ProductEntity,
    ProductBox,
    ProductRow,
    ProductView,
    ErrorAlert,
    Loader,
    PageNotFound,
    Selected,
    Tooltip,
    ProductDate,
    ToCalenderFormat,
    ToUnixFormat,
    InputText,
    InputSelect,
    InputDate
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    MomentModule,
    RoutingModule,
    StorModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [ Products,  ],
  bootstrap: [ AppRoot ]
})

export class AppModule { }
