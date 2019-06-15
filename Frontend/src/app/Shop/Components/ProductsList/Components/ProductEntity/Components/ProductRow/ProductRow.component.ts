import { Component } from '@angular/core';
import { ProductEntity } from '../../ProductEntity.component';

@Component({
  selector: 'product-row',
  templateUrl: './ProductRow.component.html',
  styleUrls: ['./ProductRow.component.scss'],
})

export class ProductRow extends ProductEntity {}
