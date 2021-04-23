import { Component } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.model';

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
        'https://cdn.tgdd.vn/Products/Images/42/226472/iphone-se-2021-600-600x600.jpg',
      price: 999,
      quantity: 4,
    },
  ];

  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ]

  // promoCode: string = '';
  numberItems: number = 0;
  subTotal: number = 0;
  tax: number = 0;
  discountPercent: number = 0;
  discount: number = 0;

  ngDoCheck() {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }
    // this.tax = this.subTotal/10;
    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * 10) / 100;
  }

  handleremoveProduct(productId: number) {
    const index = this.products.findIndex(product => product.id === productId)

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  handleUpdateQuantity(p: { id: number; quantity: number }) {
    const product = this.products.find(product => product.id === p.id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }

  // handleApplyPromoCode(code: string) {
  //   const promoCode = this.promoCodes.find(promoCodes => promoCodes.code === code);


  // }
  handleApplyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.code === code
    );
    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The promotional code was applied.`);
    } else {
      alert(
        'Sorry, the promotional code you entered is not valid! Try code "AUTUMN" (discount 10% to all cart items) or "WINTER" (discount 20% to all cart items).'
      );
    }
  }
}
