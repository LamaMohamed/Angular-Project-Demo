import { Component, OnInit, Output,Input,EventEmitter } from "@angular/core";
import { ProductService} from "src/app/_services/product.services";

import { Product } from "../../_m/product";

@Component({
    selector: 'app-product-item',
    templateUrl:'./product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {
    
    @Input() product:Product;

    constructor(private productService: ProductService){}

    ngOnInit(): void{}

    getPrice():number{
        return this.product.discount? this.product.price - this.product.discount : this.product.price
    }

    addedToCard(): void{
      this.productService.productAdded.emit(this.product);
    }
    
}