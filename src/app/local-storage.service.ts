import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveToLocalStorage(cartContent) {
    localStorage.setItem('cart', JSON.stringify(cartContent));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  clearLocalStorage() {
    localStorage.removeItem('cart');
  }
}
