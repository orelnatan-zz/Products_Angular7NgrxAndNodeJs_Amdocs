import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app.routing';
import { AppStoreModule } from './Store/AppStore.module';
import { CoreModule } from './Core/Core.module';
import { SharedModule } from './Shared/Shared.module';

import { AppRoot } from './appRoot.component';

@NgModule({
  declarations: [
    AppRoot,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  //  ShopModule, // its alredy lazy loaded... 
    SharedModule,
    MomentModule,
    AppRoutingModule,
    AppStoreModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  bootstrap: [ AppRoot ]
})

export class AppModule { }
