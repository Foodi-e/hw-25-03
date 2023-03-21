import {Component, Input} from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent {
  products: Product[] = [
    { name: 'Product 1', price: 10, imageSrc: 'assets/product1.jpg', amount: 5 },
    { name: 'Product 2', price: 20, imageSrc: 'assets/product2.jpg', amount: 2 },
    { name: 'Product 3', price: 15, imageSrc: 'assets/product3.jpg', amount: 7 },
    { name: 'Product 4', price: 5, imageSrc: 'assets/product4.jpg', amount: 10 },
    { name: 'Product 5', price: 25, imageSrc: 'assets/product5.jpg', amount: 3 },
    { name: 'Product 6', price: 30, imageSrc: 'assets/product6.jpg', amount: 8 },
    { name: 'Product 7', price: 12, imageSrc: 'assets/product7.jpg', amount: 4 },
    { name: 'Product 8', price: 18, imageSrc: 'assets/product8.jpg', amount: 6 },
  ];

  buyProduct(product: any) {
    if (product.amount > 0) {
      product.amount--;
      if (product.amount === 0) {
        this.products = this.products.filter(p => p !== product);
      }
    }
  }


  // @Input()
  // name?: string;
  //
  // @Input()
  // price?: number;
  //
  // @Input()
  // imgSrc?: string;
  //
  // @Input()
  // amount?: number;



}
