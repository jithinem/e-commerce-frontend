import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitem:any=[];
  constructor(private cart:CartService){}
  ngOnInit():void{
    this.cart.cartlist.subscribe(
      (data:any)=>{
        // console.log(data);
        this.cartitem=data; 
        // console.log(this.cartitem.length);
        // console.log(this.cartitem);
        
        
        // console.log(this.cartitem);
        
      }
    )
  }

}
