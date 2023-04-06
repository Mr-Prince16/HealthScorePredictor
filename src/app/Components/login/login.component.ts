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
request:any={}
constructor(private fb:FormBuilder, private api:LoginService){}
ngOnInit(): void{
  this.loginForm = this.fb.group({
    email:['' , Validators.required],
    password:['' , Validators.required]
  })
}
login(){
  this.request.userName=this.loginForm.value.email;
  this.request.password=this.loginForm.value.password;
this.api.login(this.request).subscribe(res=>{
  console.log(res);
  localStorage.setItem('token',res.token);

})
}
}
