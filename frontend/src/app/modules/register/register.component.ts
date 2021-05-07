import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      pregnancyOrBreastfeeding: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      telephone: ['', Validators.required],
    });
    // this.registerForm.valueChanges.subscribe(console.log);
  }

  submitForm() {
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
