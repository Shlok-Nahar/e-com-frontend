import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../products-list/products-list.component';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-4 flex gap-4 items-center max-w-2xl w-full mx-auto"
    >
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm"> {{ '$' + item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(item())"
        class="text-sm"
      />
    </div>
  `
})
export class CartItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}