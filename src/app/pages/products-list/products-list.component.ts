import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  stock?: number;
};

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-3 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'OneStep 2 Polaroid I-Type Camera',
      price: 129.95,
      image: 'assets/products/camera1.jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'Impulse AF Polaroid Camera (with Autofocus)',
      price: 219.99,
      image: 'assets/products/camera2.jpg',
      stock: 2,
    },
    {
      id: 3,
      title: 'Spirit 600 CL Polaroid Camera',
      price: 99.99,
      image: 'assets/products/camera3.jpg',
      stock: 0,
    },
    {
      id: 4,
      title: 'Instax Mini 9 Polaroid Camera',
      price: 49.99,
      image: 'assets/products/camera4.jpg',
      stock: 21,
    },
    {
      id: 5,
      title: 'Supercolour 1000 Polaroid Land Camera',
      price: 249.99,
      image: 'assets/products/camera5.jpg',
      stock: 0,
    },
  ]);
}