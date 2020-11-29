import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  // Method 1
  // customerInfo = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   phone: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     zipCode: new FormControl(),
  //   })
  // });
  // Method 2

  customerInfo = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    phone: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      zipCode: ['']
    })
  });

  onSubmitForm() {
    console.log(this.customerInfo.value);
  }

}
