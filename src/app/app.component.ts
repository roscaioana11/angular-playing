import {Component} from '@angular/core';
import {ProductService} from "./services/product.service";
import {Product} from "./models/product.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "NAME";

  products: Product[] = []

  constructor(private productService: ProductService) {
    this.products = productService.products;
  }
}
