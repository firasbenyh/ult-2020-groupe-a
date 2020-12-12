import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "../../local-storage.service";
import { CartService } from "../../cart.service";
import { ProductService } from "../../product.service";

import { products } from "../../stock";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId;
  product;
  cartContent;

  constructor(
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')

    });

    this.cartContent = this.localStorage.loadFromLocalStorage();

    this.productService.readOneProduct(this.productId).subscribe(
      (res) => this.product = res
    );

  }

  addToCart(prod) {
    this.cartService.addToCart(prod);
  }



}
