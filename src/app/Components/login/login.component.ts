import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm: FormGroup;
constructor(private fb:FormBuilder, private route: Router){}
ngOnInit(): void{
  this.loginForm = this.fb.group({
    email:['' , Validators.required],
    password:['' , Validators.required]
  })
}
login(){
  this.route.navigate(['/upload-file'])
}
}
