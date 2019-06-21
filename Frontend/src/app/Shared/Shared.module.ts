import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToCalenderFormat } from './Components/InputDate/Pips/ToCalenderFormat.pipe';
import { ToUnixFormat } from './Components/InputDate/Pips/ToUnixFormat.pipe';

import { InputText } from './Components/InputText/InputText.component';
import { InputDate } from './Components/InputDate/InputDate.component';
import { InputSelect } from './Components/InputSelect/InputSelect.component';
import { ErrorAlert } from './Components/ErrorAlert/ErrorAlert.component';
import { Loader } from './Components/Loader/Loader.component';


@NgModule({
    declarations: [
       InputText,
       InputDate,
       InputSelect,
       ErrorAlert,
       Loader,
       ToCalenderFormat,
       ToUnixFormat 
    ],
    imports: [ 
       CommonModule,
       FormsModule,
       ReactiveFormsModule 
    ],
    exports: [
       InputText,
       InputDate,
       InputSelect,
       ErrorAlert,
       Loader 
    ],
})
export class SharedModule {}