import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CartproductService } from '../../service/cartproduct.service';
import { FilterPipe } from '../../shared/filter.pipe';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
public productList:any;
public searchkey:string = "";
public filterCategory : any;

constructor(private api:ApiService,private cartService:CartproductService) {}
ngOnInit():void {
this.api.getProduct().subscribe(result => {
  this.productList = result;
this.filterCategory = result;
  this.productList.forEach((a:any) => {
    if(a.category === "men's clothing" || a.category === "women's clothing"){
      a.category="fashion";
    }
    Object.assign(a,{quantity:1,total:a.price});
  });
});
this.cartService.search.subscribe(val => {
this.searchkey = val;
})
}

addtocart(product:any) {
this.cartService.addtoCart(product);
}
filter(category:string) {
  this.filterCategory = this.productList.filter((a:any) => {
    if(a.category == category || category == '') {
      return a;
    }
  })
}
}
