import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProduct = "http://localhost:3000/api/products/view";


  getProductFun():Observable<any>{
    
    return this.http.get(this.getProduct);
  }
}
