import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AuthResponse{
  access_token: string;
  user: User;
}

export interface User{
  id: string;
  name: string;
  email: string;
  program: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BASE_URL = "https://squid-app-a6n9k.ondigitalocean.app";

  constructor(private readonly http: HttpClient) { }

  //https://squid-app-a6n9k.ondigitalocean.app/auth/login
  //https://squid-app-a6n9k.ondigitalocean.app/auth/signup

  login(email: string, password: string): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.BASE_URL}/auth/login`, {email, password});
  }
}
