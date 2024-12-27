import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border max-w-2xl w-full mx-auto">
      <h2 class="text-xl font-bold mb-4">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <span class="text-lg">Total</span>
          <span class="text-lg font-bold">{{ '$ ' + total() }}</span>
        </div>
        <app-primary-button label="Proceed to checkout" class="w-full" />
      </div>
    </div>
  `
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  total = computed(() => {
    return this.cartService.cart().reduce((sum, item) => sum + item.price, 0);
  });
}