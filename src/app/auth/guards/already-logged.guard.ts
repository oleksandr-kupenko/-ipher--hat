import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from "../auth.service";

@Injectable({ providedIn: 'root' })
export class AlreadyLoggedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // there will be also a condition of user roles to redirect if he have been already logged in
      this.router.navigateByUrl('/profile');
      return false;
    } else {
      return true;
    }
  }
}
