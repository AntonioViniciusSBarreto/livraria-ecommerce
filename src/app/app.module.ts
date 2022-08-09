import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { LivrariaAppComponent } from './livraria-app/livraria-app.component';
import { FiltersComponent } from './livraria-app/filters/filters.component';
import { ProductListComponent } from './livraria-app/product-list/product-list.component';
import { ProductItemComponent } from './livraria-app/product-list/product-item/product-item.component';
import { BookService } from './livraria-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    LivrariaAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
