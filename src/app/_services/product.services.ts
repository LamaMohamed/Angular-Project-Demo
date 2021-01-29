import { EventEmitter,Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../_m/product';



@Injectable()
export class ProductService {
  private products: Product[];
  // private products: Product[] = [
  //   {
  //     id: 1,
  //     data: [{name: 'HP', description: 'ram 12 gb',lang:{id:1} }],
  //     price: 19000,
  //     discount: 200,
  //     category:{id:1, name:"Arts & Crafts"},
  //     paymentTypes:[{id:3,name:"Paypal"}],
  //     imagesUrls: ['../../../../assets/img/layout-styles.png'],
  //   },
  //   {
  //     id: 2,
  //     data: [{ name: 'Dell', description: 'ram 12 gb'  }],
  //     price: 19000,
  //     /*  discount: 400, */
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 3,
  //     data: [{ name: 'Glue', description: 'art supplies' }],
  //     price: 100,
  //     discount: 10,
  //     imagesUrls: ['../../../../assets/img/glue.jpg'],
  //   },
  //   {
  //     id: 4,
  //     data: [{ name: 'Mac pro', description: 'ram 12 gb' }],
  //     price: 40000,
  //     discount: 1000,
  //     imagesUrls: ['../../../../assets/img/layout-styles.png'],
  //   },
  //   {
  //     id: 5,
  //     data: [{ name: 'HP xp', description: 'ram 12 gb' }],
  //     price: 30000,
  //     discount: 200,
  //     imagesUrls: ['../../../../assets/img/hp1.jpg'],
  //   },
  //   {
  //     id: 6,
  //     data: [{ name: 'Lenovo', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/layout-styles.png'],
  //   },
  //   {
  //     id: 7,
  //     data: [{ name: 'Lenovo', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/layout-styles.png'],
  //   },
  //   {
  //     id: 8,
  //     data: [{ name: 'HP', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/hp1.jpg'],
  //   },
  //   {
  //     id: 9,
  //     data: [{ name: 'Lenovo', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/layout-styles.png'],
  //   },
  //   {
  //     id: 10,
  //     data: [{ name: 'HP', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/hp.jpg'],
  //   },
  //   {
  //     id: 11,
  //     data: [{ name: 'Lenovo', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/layout-styles.png'],
  //   },
  //   {
  //     id: 12,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 13,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 14,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 15,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 16,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 17,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 18,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 19,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 20,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 21,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 22,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 12,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 23,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 24,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 25,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 26,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 27,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 28,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  //   {
  //     id: 29,
  //     data: [{ name: 'Dell', description: 'ram 12 gb' }],
  //     price: 20000,
  //     discount: 500,
  //     imagesUrls: ['../../../../assets/img/dell.webp'],
  //   },
  // ];
  
  productAdded = new EventEmitter<Product>();
  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
  currentPage = 'listing';
  constructor(private httpClient: HttpClient,
    ) {

    }
  getAllProducts(){/*  Product[] {
    return this.products.slice(); */
    return this.httpClient.get(`${this.baseUrl}product`);
  }

  getProductById(id: number) :Product {
    return this.products.find((p) => p.id === id);
  }

  addProduct(product: Product) {
/*     const id = this.products.length;
    const newproduct: Product = {
      id,
      data: product.data,
      price: product.price,
      discount: product.discount,
      imagesUrls: product.imagesUrls,
      category: product.category,
      paymentTypes: product.paymentTypes,
      tags: product.tags,
    }; 
     this.products.push(newproduct);*/
    let body = {
      discount: product.discount,
      price: product.price,
      imagesUrls: product.imagesUrls,
      data: product.data,
      categoryId:product.category.id
  };
  const token = localStorage.getItem('token');
  console.log(token);
  const headers = new HttpHeaders({
      authorization: token
  })
return  this.httpClient.post(`${this.baseUrl}product/add`,body,{headers})
  }

  updateProduct(product:Product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = {
      id:product.id,
      data: product.data,
      price: product.price,
      discount: product.discount,
      imagesUrls: product.imagesUrls,
      category: product.category,
      paymentTypes: product.paymentTypes,
      tags: product.tags, 
    };
    /* this.products.push(newproduct); */
  }
  

  deleteProduct(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }

  searchByName(productName:string){
   const prodName = productName.toLowerCase();
   return this.products.filter(p => p.data[0].name?.toLowerCase().includes(prodName));

  }
}
