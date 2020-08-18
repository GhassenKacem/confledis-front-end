import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import {FormsModule} from "@angular/forms";
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { DetailProduitComponent } from './Produit/detail-produit/detail-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
