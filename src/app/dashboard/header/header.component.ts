import { Component, OnInit , Input} from '@angular/core';
import { CartproductService } from '../../service/cartproduct.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
public totalProduct : number = 0;
public searchTerm: string = "";
constructor(private cart:CartproductService){}
ngOnInit():void {
this.cart.getProduct().subscribe(result => {
  this.totalProduct = result.length
})
}
search(event:any){
this.searchTerm = (event.target as HTMLInputElement).value;
console.log(this.searchTerm);
this.cart.search.next(this.searchTerm);
}
}
