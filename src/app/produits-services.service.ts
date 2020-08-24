import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsServicesService {
  private URL = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) { }

  public getListdesProduits( ): Observable<any> {
    // const params = new HttpParams().set('matricule', matricule);
    return this.http.get(`${this.URL}` );
  }

  public getProduitById(id): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }
  public AddProduit(produit): Observable<any> {
    return  this.http.post(`${this.URL}`, produit);
  }
  public deleteproduitById(id): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }
  public updateproduitById(id, produit): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, produit);
  }
   public getProduitByName(nom): Observable<any> {
      return this.http.get(`${this.URL}?nom=${nom}` );
    }
 }
