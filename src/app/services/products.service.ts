import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  storageQuantity = localStorage.getItem('quantity');

  quantity = signal<number>(
    this.storageQuantity ? parseFloat(this.storageQuantity) : 0
  );

  setQuantity(value: number) {
    if (!isNaN(value) && value >= 0) {
      localStorage.setItem('quantity', value.toString());

      return this.quantity.set(value);
    }
  }
}
