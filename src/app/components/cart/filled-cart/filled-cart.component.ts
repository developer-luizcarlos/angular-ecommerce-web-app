import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { PrimaryButtonComponent } from '../../primary-button/primary-button.component';

@Component({
  selector: 'app-filled-cart',
  imports: [PrimaryButtonComponent],
  templateUrl: './filled-cart.component.html',
  styleUrl: './filled-cart.component.css',
})
export class FilledCartComponent {
  productService = inject(ProductsService);

  resetQuantity() {
    this.productService.setQuantity(0);
  }

  total = signal(
    (this.productService.quantity() * 125).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  );
}
