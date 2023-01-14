import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  // providers: [ProductService]
})
export class ProductComponent {
  @Input() product!: Product;
}
