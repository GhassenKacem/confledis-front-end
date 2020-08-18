import { Component, OnInit } from '@angular/core';
import {ProduitsServicesService} from "../../produits-services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  message: any;

  constructor(private produitsServicesService: ProduitsServicesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addProduit(formulaire) {
      console.log(formulaire);
      this.produitsServicesService.AddProduit(formulaire.value).subscribe(
        (data) => {this.router.navigate(['']); },
        (err) => {this.message = err.toString(); }
      );
  }
}
