import { Component, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { Product } from '../products-list.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
    class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative"
    style="width: 500px; height: 375px"
  >
    <div class="mx-auto">
      <img
        [src]="product().image"
        class="w-[400px] h-[200px] object-contain"
        alt="{{ product().title }}"
      />
    </div>

    <div class="flex flex-col flex-auto1">
      <span class="text-md font-bold">{{ product().title }}</span>
      <span class="text-sm"> {{ '$' + product().price }}</span>
      <app-primary-button
        (btnClicked)="cartService.addToCart(product())"
        class="mt-3"
        label="Add to Cart"
      ></app-primary-button>
    </div>

    <span
      class="absolute top-2 right-3 text-sm font-bold"
      [class]="product().stock ? 'text-green-500' : 'text-red-500'"
    >
      @if (product().stock) {
      {{ product().stock }} left in stock } @else { Out of stock }
    </span>
  </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  cartService = inject(CartService);
  
  product = input.required<Product>();
}
