import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartarray:any=[];//array
  cartlist=new BehaviorSubject([])//list----a stream of data
  constructor() { }
  //add to cart
  addtocart(product:any){
    this.cartarray.push(product)
    this.cartlist.next(this.cartarray)//a stream of data
    console.log(this.cartlist)
    console.log(this.cartarray)
    
  }

}
