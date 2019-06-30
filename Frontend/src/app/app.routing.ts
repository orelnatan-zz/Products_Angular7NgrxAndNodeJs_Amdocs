import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from './Core/Pages/PageNotFound/PageNotFound.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    { path: 'home', loadChildren: './Shop/Shop.module#ShopModule' },

  //  { path: '**', component: PageNotFound },
];   

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
  
export class AppRoutingModule {}