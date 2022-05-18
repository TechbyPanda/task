import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addApi = 'http://localhost:3000/api/cart/add-to-cart';
  view = "http://localhost:3000/api/cart/view";
  delete="http://localhost:3000/api/cart/delete";

  addToCart(productId:any):Observable<any>{
    var obj =  {
      productId:productId,
      userId:sessionStorage.getItem('userId')
    }
    return this.http.post(this.addApi, obj);
  }

  getCart():Observable<any> {
    var userId = sessionStorage.getItem('userId')
    return this.http.post(this.view,{userId:userId})
  }

  remove_cart(productId:any):Observable<any> {
    var obj = {
      userId:sessionStorage.getItem('userId'),
      productId:productId
    }
    return this.http.post(this.delete,obj)
  }
}
