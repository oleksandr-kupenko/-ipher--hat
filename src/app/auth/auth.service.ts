import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
/* import { Tokens } from './user.service'; */


export const TOKEN_CONSTANTS = {
  ACCESS_TOKEN: 'sc-access-token',
  REFRESH_TOKEN: 'sc-refresh-token',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject('API_URL') private API_URL: string
  ) {}

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  getAccessToken(): string {
   /*  const access = this.localStorageService.get(TOKEN_CONSTANTS.ACCESS_TOKEN) || undefined; */
    return 'access';
  }

  getRefreshToken(): string {
   /*  const refresh = this.localStorageService.get(TOKEN_CONSTANTS.REFRESH_TOKEN) || undefined; */
    return 'refresh';
  }

  storeTokens(rememberUser = true): void {
   /*  this.localStorageService.set(TOKEN_CONSTANTS.ACCESS_TOKEN, tokens.tokens.accessToken, rememberUser);
    this.localStorageService.set(TOKEN_CONSTANTS.REFRESH_TOKEN, tokens.tokens.refreshToken, rememberUser); */
  }

  removeTokens(): void {
/*     this.localStorageService.remove(TOKEN_CONSTANTS.ACCESS_TOKEN);
    this.localStorageService.remove(TOKEN_CONSTANTS.REFRESH_TOKEN); */
  }

  refreshToken(): Observable<any> {
    const payload = { refresh: this.getRefreshToken() };
    return this.http.post<any>(`${this.API_URL}/accounts/token/refresh`, payload).pipe(
/*       tap((tokens: Tokens) => {
        this.storeTokens(tokens);
      }), */
      catchError((error) => {
        this.removeTokens();
        this.router.navigateByUrl('/auth/login');
        return throwError('refresh is dead:', error);
      })
    );
  }
}
