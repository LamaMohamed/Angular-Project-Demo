import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductItemComponent} from './products/product-item/product-item.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductService } from './_services/product.services';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ErrorNotFoundComponent } from './auth/error-not-found/error-not-found.component';
import { StringPipePipe } from './pipes/string-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListingComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DropdownComponent,
    AddProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ErrorNotFoundComponent,
    StringPipePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService,PaymentTypeService, ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
