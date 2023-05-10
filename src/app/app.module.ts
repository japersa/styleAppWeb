import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';
import { NavModule } from './nav/nav.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    UserModule,
    NavModule,
    HomeModule,
    ProductModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
