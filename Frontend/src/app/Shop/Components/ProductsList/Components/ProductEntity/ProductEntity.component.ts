import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Product } from '../../../../Models/Product.model';

@Component({
  template: ``,
  encapsulation: ViewEncapsulation.Emulated,
})
// This component is inherited by ProductBox and ProductRow components //
export class ProductEntity {
    @Output() selected: EventEmitter<string> = new EventEmitter();
    @Output() deleted: EventEmitter<string> = new EventEmitter();
    @Input() product: Product;
}
