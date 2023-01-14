import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductComponent} from './components/product/product.component';
import {AddProductComponent} from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
