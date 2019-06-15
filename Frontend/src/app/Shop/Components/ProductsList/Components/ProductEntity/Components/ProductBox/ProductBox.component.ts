import { Component } from '@angular/core';
import { ProductEntity } from '../../ProductEntity.component';

@Component({
  selector: 'product-box',
  templateUrl: './ProductBox.component.html',
  styleUrls: ['./ProductBox.component.scss'],
})

export class ProductBox extends ProductEntity {}
