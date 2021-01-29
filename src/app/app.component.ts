import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductService} from "src/app/_services/product.services";

import { Product } from "./_m/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  productsArray: Product[]=[];
  /////
  currentPage:string;
  /* title = 'my-app'; */
  constructor(private productService: ProductService){}

  ngDoCheck(){
    this.currentPage = this.productService.currentPage;
  }
  addToCartAtHeader(product: Product){
      this.productsArray?.push(product);
  }
}
