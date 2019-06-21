import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Shop/Pages/Home/Home.component';
import { ProductView } from './Shop/Pages/ProductView/ProductView.component';
import { PageNotFound } from './Core/Pages/PageNotFound/PageNotFound.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    { path: 'home', loadChildren: './Shop/Shop.module#ShopModule' },
 //   { path: 'Product-view', component: ProductView },

   // { path: '**', component: PageNotFound },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
  
export class AppRoutingModule {}