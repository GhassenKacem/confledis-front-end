import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProduitComponent} from "./Produit/list-produit/list-produit.component";
import {AddProduitComponent} from "./Produit/add-produit/add-produit.component";
import {UpdateProduitComponent} from "./Produit/update-produit/update-produit.component";
import {DetailProduitComponent} from "./Produit/detail-produit/detail-produit.component";


const routes: Routes = [
      { path: '', component: ListProduitComponent},
      { path: 'produit/:id' , component: DetailProduitComponent },
      {path: 'ajoute-produit', component: AddProduitComponent},
      {path: 'update-produit/:id' , component: UpdateProduitComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
