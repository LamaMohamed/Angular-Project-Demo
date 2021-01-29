import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ErrorNotFoundComponent } from './auth/error-not-found/error-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';

const routes: Routes = [
  {path:'',component: ProductListingComponent},
  { path: 'home', redirectTo:'' , pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'product/details/:id',component:ProductDetailsComponent},
  {path:'product/listing',component:ProductListingComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'product/edit/:id',component:AddProductComponent},
  {path:'aboutUs',component:AboutUsComponent},
  { path: '**', component:ErrorNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


