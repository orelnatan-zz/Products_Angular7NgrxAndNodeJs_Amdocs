import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../../../Models/Product.model';

@Component({
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
// This component is inherited by ProductBox and ProductRow components //
export class ProductEntity {
    @Output() selected: EventEmitter<string> = new EventEmitter();
    @Output() deleted: EventEmitter<string> = new EventEmitter();
    @Input() product: Product;
}
