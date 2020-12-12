import { Component, OnInit } from '@angular/core';

import { ProductService } from "../product.service";
import { products } from "../stock";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  // productList = products;
  productList;

  product:object = {
    "id": 11,
    "productName": "IPhone 12",
    "price": 5149,
    "image" : "iphone8.png",
    "description": "Ecran 4.7\" - Processeur Hexa-core (2x Monsoon + 4x Mistral) - Ram 2 Go - Mémoire de stockage 64 Go - 2 x Appreil Photo 12 MP (arriére) , 7 MP ( Frontale ) - Lecteur d\"empreinte digitale - Fast Charging & Qi Wireless Charging - IOS 11 - Batterie : 1821 Mah - 4G - GPS- Couleur Gold"
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readAllProducts().subscribe(
      (res) => this.productList = res
    );
  }

  shareProduct(productName) {
    alert(productName + ' has been shared with your friends');
  }

}
