import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {
  @Output() public scanned = new EventEmitter()
  public scannerForm: FormGroup = this.formBuilder.group({
    productName: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public submit(): void {
    const form = this.scannerForm.getRawValue() as { productName: string };
    this.scanned.emit(form.productName);
    this.scannerForm.reset();
  }
}
