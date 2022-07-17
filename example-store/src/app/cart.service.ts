import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor
  (
    private httpClient: HttpClient
  ) { }

  add(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clear() {
    this.items = [];
    return this.items; // tf is this doing?
  }

  getShippingPrices() {
    return this.httpClient.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }

  //remove(product: Product) {
  //  this.items.pop(product);
  //}

}
