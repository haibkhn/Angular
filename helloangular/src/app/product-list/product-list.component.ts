import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      name: 'IPhone 6S, 64GB',
      description: 'FOr AT&T/ T-MObile(Renewed)',
      thumbnail:
        'https://cdn.tgdd.vn/Products/Images/42/228736/iphone-12-trang-new-600x600-200x200.jpg',
      price: 149,
      quantity: 2,
    },
    {
      id: '2',
      name: 'Samsung',
      description: 'FOr not IPhone user',
      thumbnail:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg',
      price: 199,
      quantity: 1,
    },
    {
      id: '3',
      name: 'IPhone 6S, 64GB',
      description: 'FOr AT&T/ T-MObile(Renewed)',
      thumbnail:
        'https://cdn.tgdd.vn/Products/Images/42/228736/iphone-12-trang-new-600x600-200x200.jpg',
      price: 149,
      quantity: 2,
    },
  ];
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
