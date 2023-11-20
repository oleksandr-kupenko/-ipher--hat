import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private API_URL: string) { }

  getUniqueId(): Observable<number> {
    return this.http.get<number>(`${this.API_URL}/auth/generate-id`);
  }
}
