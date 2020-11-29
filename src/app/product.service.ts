import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  /**
   * Get list of products
   */
  readAllProducts() {
    return this.http.get(this.apiUrl);
  }

  /**
   * Get details about a product
   * @param id
   */
  readOneProduct(id:number) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Add new product
   * @param data
   */
  createNewProduct(data:object) {
    return this.http.post(this.apiUrl, data);
  }

  /**
   * Update existing product
   * @param id
   * @param data
   */
  updateProduct(id:number, data:object) {
    return this.http.put(this.apiUrl + '/' + id, data);
  }

  /**
   * Delete a product
   * @param id
   */
  deleteProduct(id:number) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
