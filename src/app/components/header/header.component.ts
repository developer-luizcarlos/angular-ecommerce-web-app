import { Component, inject, signal } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  productService = inject(ProductsService);

  cartVisibility = signal<boolean>(false);

  toggleVisibility() {
    return this.cartVisibility.set(!this.cartVisibility());
  }
}
