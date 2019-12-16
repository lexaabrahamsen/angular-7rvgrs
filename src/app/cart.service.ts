import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product){
    this.items.push(product);
  }

  getItems() {
    return this.item
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
  constructor() { }

}