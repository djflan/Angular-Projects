import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // Get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    // Find the product corresponding to the product id
    this.product = products.find(product => product.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.add(product);
    window.alert('Added to cart');
  }

}
