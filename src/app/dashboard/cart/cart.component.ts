import { Component } from '@angular/core';
import { CartproductService } from '../../service/cartproduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
public product: any = [];
public grandTotal!:number;

constructor(private cart:CartproductService) {
}
ngOnInit() : void {
  this.cart.getProduct().subscribe(result => {
    this.product = result;
    this.grandTotal = this.cart.getTotalPrice();
  })
}
removeProduct(product:any)
{
  this.cart.removeCartItem(product);
}
emptyCart() {
  this.cart.removeAllCart();
}
}
