import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: number): void {
    this.onRemoveProduct.emit(productId);
  }

  inputQuantity(id: number, inputElement: HTMLInputElement) {
    const value = inputElement.value;
    const intValue = parseInt(value);

    if (intValue < 1) {
      inputElement.value = -intValue + '';
    }
    else if (value.length > 2) {
      inputElement.value = value.slice(0, 2);
    }

    this.onUpdateQuantity.emit({ id, quantity: parseInt(inputElement.value) || '' });
  }
}
