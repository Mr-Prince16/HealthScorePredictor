import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ApiUrl = '';
  constructor(private http:HttpClient) { }

  login(credential:any): Observable<any> {
    return this.http.post(this.ApiUrl,credential);
}
}
