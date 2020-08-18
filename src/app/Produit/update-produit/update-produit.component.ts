import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitsServicesService} from "../../produits-services.service";
import {HttpClient} from "@angular/common/http";
import {Produit} from "../../Model/Produit";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  message: any;
  // tslint:disable-next-line:variable-name
  Produit_id: string;
  produit: Produit;

  constructor(private router: Router,
              private  produitsServicesService: ProduitsServicesService,
              private httpClient: HttpClient,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.Produit_id = this.route.snapshot.paramMap.get('id');
    this.produitsServicesService.getProduitById(this.Produit_id).subscribe(
      (data) => {this.produit = data; },
      (err) => {this.message = err.toString(); }
    );
  }

  updateProduit(formulaire) {
        this.produitsServicesService.updateproduitById(this.Produit_id , formulaire.value).subscribe(
          (data) => {this.router.navigate(['']); },
          (err) => {this.message = err.toString(); }
        );
  }
}
