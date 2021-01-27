import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './components/display/display.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { PrinterComponent } from './components/printer/printer.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DisplayComponent,
    ScannerComponent,
    PrinterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DisplayComponent,
    ScannerComponent,
    PrinterComponent
  ]
})
export class SharedModule { }
