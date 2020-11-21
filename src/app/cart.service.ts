import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartContent;

  constructor(
    private localStorage: LocalStorageService
  ) {
    this.cartContent = this.localStorage.loadFromLocalStorage();
  }

   addToCart(prod) {
    for (let index = 0; index < this.cartContent.length; index++) {
      if(this.cartContent[index].productName == prod.productName) {
        this.cartContent[index].quantity += 1;
        this.localStorage.saveToLocalStorage(this.cartContent);
        return;
      }
    }
    prod.quantity = 1;
    this.cartContent.push(prod);
    this.localStorage.saveToLocalStorage(this.cartContent);
  }

  loadFromCart() {
    return this.localStorage.loadFromLocalStorage();
  }

  clearCart() {
    this.localStorage.clearLocalStorage()
  }
}
