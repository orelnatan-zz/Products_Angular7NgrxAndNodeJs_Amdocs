import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Header } from './Components/Header/Header.component';
import { SearchBox } from './Components/Header/Components/SearchBox/SearchBox.component';
import { PageNotFound } from './Pages/PageNotFound/PageNotFound.component';

import { Selected } from './Components/Header/Directives/Selected/Selected.directive';
import { Tooltip } from './Directives/Tooltip/Tooltip.directive';

@NgModule({
    declarations: [
        Header,
        SearchBox,
        PageNotFound,
        Selected,
        Tooltip,
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    exports: [
         Header,
         SearchBox,
         PageNotFound,
         Selected,
         Tooltip,
    ],
})
export class CoreModule {}