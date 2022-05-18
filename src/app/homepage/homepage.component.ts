import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private productService: ProductService,public cart:CartService) {
    this.productService.getProductFun()
    .subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

  ngOnInit(): void {
  }
  public search:string="";
  public products:any;

  addtocart(productId:any){
    this.cart.addToCart(productId)
    .subscribe(data =>{
      console.log(data);
      alert("added to cart");
    })
  }

}
