import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private http: HttpClient) { }

  forgotPassword(emailId) {
    return this.http.post(environment.apiUrl + 'passwordreset', emailId)
  }
  
}
