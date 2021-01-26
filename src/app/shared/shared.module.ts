import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './components/display/display.component'

@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DisplayComponent
  ]
})
export class SharedModule { }
