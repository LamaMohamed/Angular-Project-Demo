import { Component, OnInit,Input,OnChanges,DoCheck} from '@angular/core';
import { ProductService } from 'src/app/_services/product.services';
import { Product } from "../../_m/product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges,DoCheck{
  
  cartArray: Product[]=[];
  sum=0;
 
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res)=>{
        this.cartArray.push(res);
      },
      (err)=>{console.log(err);},
      (completed)=>{alert("complete")}
      
    )
  }
  ngOnChanges(){
    console.log(this.cartArray)

  }
  ngDoCheck(): number {
    this.sum = 0;
    for (let i = 0; i < this.cartArray.length; i++) {
      this.sum += this.cartArray[i].discount
        ? this.cartArray[i].price - this.cartArray[i].discount
        : this.cartArray[i].price;
    }


    return this.sum;
  }
  /* calculateTotal(): number{
    let total =0;
     for(let i=0;i<=this.cartArray.length;i++){
      const prod=this.cartArray[i];
      total += prod.discount ? prod.price - prod.discount : prod.price;
     }
       return total;
  } */
  removeProduct() {
    this.cartArray.pop();
  }


  changeCurrentPage(dest:string){
    this.productService.currentPage=dest;
  }

}
