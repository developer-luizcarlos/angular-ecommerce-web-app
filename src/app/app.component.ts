import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SliderComponent, PrimaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productService = inject(ProductsService);

  productQuantity =
    signal<number>(this.productService.quantity());

  addToCart() {
    const quantity = this.productQuantity();
    this.productService.setQuantity(quantity);
  }

  decrementCounter() {
    if (this.productQuantity() > 0) {
      return this.productQuantity.set(this.productQuantity() - 1);
    } else {
      return this.productQuantity();
    }
  }

  incrementCounter() {
    return this.productQuantity.set(this.productQuantity() + 1);
  }
}
