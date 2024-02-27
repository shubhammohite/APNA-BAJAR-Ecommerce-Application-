import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartproductService {
   public cartProductList : any = []
   public productList = new BehaviorSubject<any>([]);
   public search = new BehaviorSubject<string>(" ");
  constructor() { }
  getProduct() {
   return this.productList.asObservable()
  }
  setProduct(product: any)
  {
this.cartProductList.push(...product);
this.productList.next(product);
  }

  addtoCart(product : any){
    this.cartProductList.push(product);
    this.productList.next(this.cartProductList);
    this.getTotalPrice();
    console.log(this.cartProductList);
  }
  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartProductList.map((a:any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any) {
this.cartProductList.map((a:any,index:any) => {
  if(product.id === a.id) {
    this.cartProductList.splice(index,1)
  }
})
this.productList.next(this.cartProductList);
}

removeAllCart()
{
  this.cartProductList = []
  this.productList.next(this.cartProductList);
}
}
