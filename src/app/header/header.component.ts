import { Component } from '@angular/core';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private api:ApiService){}
  search(event:any){
    let searchkey=event.target.value;
    this.api.searchkey.next(searchkey);
  }

}
