import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 6S, 64GB',
      description: 'For AT&T/ T-Mobile(Renewed)',
      thumbnail:
        'https://cdn.tgdd.vn/Products/Images/42/228736/iphone-12-trang-new-600x600-200x200.jpg',
      price: 149,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Samsung',
      description: 'For not IPhone user',
      thumbnail:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg',
      price: 199,
      quantity: 1,
    },
    {
      id: 3,
      name: 'IPhone 6SE, 169GB',
      description: 'For Who?',
      thumbnail:
        'https://cdn.tgdd.vn/Products/Images/42/228736/iphone-12-trang-new-600x600-200x200.jpg',
      price: 999,
      quantity: 4,
    },
  ];

  numberItems: number = 0;
  subTotal: number = 0;
  tax: number = 0;

  // for (const product of this.products) {
  //   numberItems += product.quantity;
  //   subTotal += product.price * product.quantity;
  // }

  ngDoCheck() {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }
    this.tax = this.subTotal/10;
    // this.discount = (this.subTotal * this.discountPercent) / 100;
    // this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }

  removeProduct(productId: number) {
    const index = this.products.findIndex(product => product.id === productId)

    if (index !== -1) {
      this.products.splice(index, 1);
    }

    //Tinh tong so luong san pham va tong tien
    // let numberItems = 0;
    // let subTotal = 0;
    // let tax = 0;

    // for (const product of this.products) {
    //   numberItems += product.quantity;
    //   subTotal += product.price * product.quantity;
    // }

    // this.numberItems = numberItems;
    // this.subTotal = subTotal;
    // this.tax = subTotal/10;
  }

  handleUpdateQuantity(p: { id: number; quantity: number }) {
    const product = this.products.find(product => product.id === p.id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }

}
