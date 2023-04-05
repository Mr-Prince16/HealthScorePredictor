import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
   apiUrl!:any;
  constructor(private http: HttpClient) { }
  signUp(parameter:any):Observable<any>{
    return this.http.post(this.apiUrl,parameter)
  }
}
