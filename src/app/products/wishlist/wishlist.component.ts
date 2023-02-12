import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist:any=[];
  eMsg:any;
  constructor(private api:ApiService, private router:Router){}
  ngOnInit():void{
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.products
        if(this.wishlist.length==0){
          this.eMsg="Empty wishlist";
        }
      },
      (data:any)=>{
        this.eMsg=data.error.message;
      }
    )
  }
  deletewish(product:any){
    this.api.deletewish(product.id).subscribe(
      (result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('wishlist')
      },
      (result:any)=>{
        alert(result.error.message);
      })
  }

}
