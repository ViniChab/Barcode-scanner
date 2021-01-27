import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnChanges {
  @Input() public scannedProducts: Product[];
  public notFoundError = false;

  constructor() {}

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.scannedProducts?.currentValue) {
      this.notFoundError = false;
    }
  }

  public showError(): void {
    this.notFoundError = true;

    setTimeout(() => {
      this.notFoundError = false;
    }, 3000);
  }
}
