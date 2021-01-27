import { Component, OnInit, ViewChild } from '@angular/core';

import { DisplayComponent } from 'src/app/shared/components/display/display.component';
import { Product } from 'src/app/shared/models/product.model';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild(DisplayComponent) public display: DisplayComponent;
  public scannedProducts: Product[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {}

  public onScanned(productName: string): void {
    const product = this.databaseService.getProduct(productName);

    product ? this.scannedProducts.push(product) : this.display.showError();
  }
}
