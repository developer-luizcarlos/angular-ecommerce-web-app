import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { FilledCartComponent } from './filled-cart/filled-cart.component';

@Component({
  selector: 'app-cart',
  imports: [EmptyCartComponent, FilledCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  productService = inject(ProductsService);
}
