import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public products: Product[] = [];

  constructor(private databaseService: DatabaseService) {
    this.databaseService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  ngOnInit(): void {}
}
