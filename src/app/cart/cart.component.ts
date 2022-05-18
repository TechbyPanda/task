import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService) {
    this.cart.getCart()
    .subscribe(data =>{
      console.log(data);
      this.products = data;
      var i = 0;
      for(let product of this.products.productId){
        this.price += parseInt(product.price);
        this.calc[i++] = 1;
        this.total_qty++;
      }
      
    })
}

  ngOnInit(): void {
  }

  public products:any='';
  public qty:number=0;
  public price:number=0;
  public total_qty:number=0;
  public calc:number[] = [];

  update_qty(qty:any,i:any){
    var total:number = 1 ;
  this.qty= qty.target.value;
  if(this.qty < 1){
    qty.target.value=1;
  }
  this.calc[i]=qty;

  for(let j=0;j<this.calc.length;j++){
    total = this.calc[j] * parseInt(this.products.productId[j].price);
    console.log(this.calc[j])
  }
  this.price = total;
}

  remove(productId:any,i:any){
    this.cart.remove_cart(productId)
    .subscribe(data => {
      alert('delete success')
      this.products.productId.splice(i,1);
      console.log(data);
    })
  }

}
