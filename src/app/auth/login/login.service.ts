import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from './login.inteface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private API_URL: string) { }


    login(loginData: LoginData): Observable<unknown> {
      return this.http.post<number>(`${this.API_URL}/auth/login`, loginData);
    }
}
