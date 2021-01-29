import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PaymentType } from 'src/app/_m/payment-type';
import { Product } from 'src/app/_m/product';
import { ProductCategory } from 'src/app/_m/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import {ProductService} from "../../../_services/product.services"
import { ProductCategoryService } from '../../../_services/product-category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product: Product={data:[{}], paymentTypes:[],tags:[],category:{}}
 paymentTypes : PaymentType[]=[];
 productCategory: ProductCategory[]=[];
 editMode: boolean = false;
  constructor(private paymentTypeService: PaymentTypeService,  
    private productCategoryService: ProductCategoryService,
    private productService: ProductService,
    private activatedRouters: ActivatedRoute,
    private router: Router) { 
    
  }

  ngOnInit(): void {

    console.log(this.activatedRouters.snapshot.url[1].path);
    this.editMode = this.activatedRouters.snapshot.url[1] && this.activatedRouters.snapshot.url[1].path === 'edit' && true;
    if (this.editMode) {
      const id = parseInt(this.activatedRouters.snapshot.params.id);
      this.product = this.productService.getProductById(+id);
    }
    this.paymentTypes= this.paymentTypeService.getAllPayments();
    this.productCategory= this.productCategoryService.getAllProductCategory();
  }
  
  onSubmit(form){
   /*  var1 as HTMLFormElement; */
    console.log(this.product)
    
    for(let index=0;index<this.paymentTypes.length;index++)
    if(form.value['check_'+index]){
      this.product.paymentTypes.push(this.paymentTypes[index]); 
    }
    this.productService.addProduct(this.product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/product', 'listing']);
      }, 
      (err) => {
        console.log(err)
      },
      () => { }
    );
  /*  this.productService.addProduct(this.product); */
  }
  onCheckBoxPressed(index){
    this.product.paymentTypes.push(this.paymentTypes[index]);
  }
  onTagAdded(tagInput){
    this.product.tags.push({name:tagInput.value});
    tagInput.value="";
  }

  onTagDel(i:number){
    this.product.tags?.splice(i,1);
  }
  onTagDelAll(){
    this.product.tags?.splice(0);
  }
}
 