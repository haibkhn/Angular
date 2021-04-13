import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: string): void {
    const index = this.products.findIndex(product => product.id === productId)

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  updateQuantity(element: number) {
    console.log(element);
  }
}
