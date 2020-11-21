import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../local-storage.service";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartContent;
  totalPrice = 0;
  TAX_RATE = 0.2;

  constructor(
    private localStorage: LocalStorageService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartContent = this.cartService.loadFromCart();
    this.computeTotalPrice();
  }


  computeTotalPrice() {
    for (let index = 0; index < this.cartContent.length; index++) {
      this.totalPrice += this.cartContent[index].price * this.cartContent[index].quantity;

    }
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
