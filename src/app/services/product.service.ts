import {Injectable} from '@angular/core';
import {Product} from "../models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{name: 'product1'}, {name: 'product2'}, {name: "product3"}];

  constructor() {
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}
