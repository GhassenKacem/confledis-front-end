import { Component, OnInit } from '@angular/core';
import {ProduitsServicesService} from '../../produits-services.service';
import {Produit} from '../../Model/Produit';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits: Produit[];

  constructor(private produitsServicesService: ProduitsServicesService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadListProduit();
  }

  private reloadListProduit() {
      this.produitsServicesService.getListdesProduits( ).subscribe(
        (data) => {this.produits = data ; },
      (err) => {alert(err.toString()); }
      );
  }
public deleteProduit(id) {
    this.produitsServicesService.deleteproduitById(id).subscribe(
      (data) => { alert('Le produit a été supprimer') ; this.reloadListProduit()},
      (err) => {alert(err.toString()); }
    );
}

  updateRouter(id: string) {
    this.router.navigate([`/update-produit/${id}`]);
  }

  ajouteProduit() {
    this.router.navigate(['/ajoute-produit']);
  }

  search(inputSerach) {
    this.produitsServicesService.getProduitByName(inputSerach.value).subscribe(
        (data) => {this.produits = data; },
        (err) => {alert(err.toString()); console.log(err); }
      );
  }
}
