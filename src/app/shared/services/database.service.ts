import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  public getProducts(): void {
    this.http
      .get<Product[]>('/assets/database/database.json')
      .subscribe((res) => {
        this.products = res;
      });
  }

  public getProduct(productName: string): Product | false {
    const product = this.products.find(
      (item) => item.name.toLocaleLowerCase() === productName.toLocaleLowerCase()
    );
    return product ? product : false;
  }
}
