import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManualFormService {
  ApiUrl = '';
  constructor(private http:HttpClient) { }
  submitForm(parameter:any): Observable<any>{
  return this.http.post(this.ApiUrl,parameter);
  }
}
