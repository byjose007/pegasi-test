import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  limitAge = new Array(100);

  maxDate: Date = new Date();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.valueChanges();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      pregnancyOrBreastfeeding: [false, Validators.required],
      dateOfBirth: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

  valueChanges(): void {
    this.registerForm.controls['sex'].valueChanges.subscribe((value) => {
      if (value === 'M') {
        this.registerForm.patchValue({ pregnancyOrBreastfeeding: false });
      }
    });
  }

  submitForm() {
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
