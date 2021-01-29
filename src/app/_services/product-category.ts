import { ProductCategory } from "../_m/product-category";

export class ProductCategoryService{
    productCategory: ProductCategory[]=[
        {id: '5eacc0a4ba43cd4b889f3d13', name:"Arts & Crafts"},
     /*    {id:2, name:"Automotive"},
        {id:3, name:"Baby"},
        {id:4, name:"Books"},
        {id:5, name:"Electronics"},
        {id:6, name:"womens Fashion"},
        {id:7, name:"Mens Fashion"},
        {id:8, name:"Health & Household"},
        {id:9, name:"Home & Kitchen"},
        {id:10, name:"Military Accessories"},
        {id:11, name:"Movies & Television"},
        {id:12, name:"Sports & Outdoors"},
        {id:13, name:"Tools & Home Improvement"}, */

    ]

    getAllProductCategory(): ProductCategory[]{
       return this.productCategory.slice();
    }
}