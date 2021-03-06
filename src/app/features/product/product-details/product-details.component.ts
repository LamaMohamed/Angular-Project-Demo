import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_m/product';
import {ProductService} from "../../../_services/product.services"


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    product: Product;
    relatedProducts: Product[]=[];
    
  
    constructor(private productService: ProductService,
    private activatedRoute:ActivatedRoute) { } 
  
    ngOnInit(): void {
     
      /* this.relatedProducts = this.productService.getAllProducts().slice(3,7); */
       console.log(this.product);
  
      this.activatedRoute.params.subscribe(
        (params) => { 
          console.log(params);
          
          /* id = params.id; */
          this.productService.getProductById(+params.id);
        },
        (err) => {console.log(err);
         },
        () => { },
      ) 
      
      const id = this.activatedRoute.snapshot.params.id;
      this.productService.getProductById(+id);
    }
}
