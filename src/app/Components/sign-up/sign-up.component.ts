import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent implements OnInit {

  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "fa-eye-slash";
  signupForm!: FormGroup;
  genders = ['Male', 'Female'];
 
    constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      firstName: ['' , Validators.required],
      lastName: ['' , Validators.required],
      email: ['' , Validators.required],
      password: ['' , Validators.required],
      age:['' , Validators.required],
      gender:['' , Validators.required]
    })
  }
  onSubmit(){
    console.log(this.signupForm);
  }
 
}