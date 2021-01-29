import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../_m/product';
import { ProductService } from '../../_services/product.services';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
  pageNumbers: number[] = [];
  pageSize = 6;
  currentPage = 0;
  ArrayOfNames = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    /* this.products = this.productService.getAllProducts();
    for (let index = 0; index < this.products.length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
      this.calculateNumberOfPages();
    } */
    this.productService.getAllProducts().subscribe(
      (response) => {
        console.log(this.products = response['product']);
          this.calculateNumberOfPages(response['numberOfProducts']);
        
      },
      (err) =>{console.log(err);
      },
      () =>{},
    );
   
    
  }

  calculateNumberOfPages(length) {
    this.pageNumbers = [];
    /* this.products=this.productService.getAllProducts(); */
    for (let index = 0; index < length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
    }
  }

  getSlicedArrayofProducts(): Product[] {
    const start = this.currentPage * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }

  onSearchHandler(searchInput) {
    /* this.products = this.productService.searchByName(searchInput.value);
    this.calculateNumberOfPages(); */
  }
  Sort(x) {
    console.log(x);
       
    switch (x) {
      case '1':
        
         break;
      case '2':
        for (let index = 0; index < this.products.length; index++) {
          this.products.sort(function (a, b) {
            return (
              (a.discount ? a.price - a.discount : a.price) -
              (b.discount ? b.price - b.discount : b.price)
            );
          });
          return this.products.slice(
            this.currentPage * this.pageSize,
            this.currentPage * this.pageSize + this.pageSize
          );
        } 
        break;
      case '3':
        for (let index = 0; index < this.products.length; index++) {
          this.products.sort(function (a, b) {
            return (
              (b.discount ? b.price - b.discount : b.price) -
              (a.discount ? a.price - a.discount : a.price)
            );
          });
          console.log(this.products);
          return this.products.slice(
            this.currentPage * this.pageSize,
            this.currentPage * this.pageSize + this.pageSize
          );
        }
        break;
      /* case '4':
        this.sortByName();
        break; */

      default:
        this.getSlicedArrayofProducts();
        break;
    }
  }

 /*  featured() {
    this.products = this.productService.getAllProducts();

    for (let index = 0; index < this.products.length; index++) {

      const x = this.products[index].data[index].name;

      this.ArrayOfNames.push(x);
    }
    this.ArrayOfNames.sort();
    console.log(this.ArrayOfNames);

    for (let index = 0; index < this.ArrayOfNames.length; index++) {
      this.products[index].data[0].name = this.ArrayOfNames[index];
    }

    return this.products.slice(
      this.currentPage * this.pageSize,
      this.currentPage * this.pageSize + this.pageSize
    );
  } 
  sortByName(){
    
  }  */
}
