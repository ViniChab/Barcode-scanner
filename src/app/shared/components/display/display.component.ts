import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnChanges {
  @Input() public scannedProducts: Product[] = [];
  public notFoundError = false;

  constructor(public databaseService: DatabaseService) {}

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.scannedProducts?.currentValue) {
      this.notFoundError = false;
    }
  }

  public removeItem(itemIndex: number): void {
    this.scannedProducts.splice(itemIndex, 1);
  }

  public showError(): void {
    this.notFoundError = true;

    setTimeout(() => {
      this.notFoundError = false;
    }, 3000);
  }

  public get totalPrice(): string {
    let priceSum = 0;
    this.scannedProducts?.forEach((item) => {
      const itemPrice = +item.price.replace('$', '');
      priceSum += itemPrice;
    });

    const sumString = `$${priceSum}`;

    return sumString.split('.').pop()?.length === 1 ?
      sumString + '0' :
      sumString.substr(0, 6);
  }
}
