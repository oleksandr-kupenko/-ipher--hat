import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthErrorStateMatcher } from '../auth-error-state-matcher';
import { AUTH_ROUTES } from '../auth.constants';
import { LoginService } from './login.service';
import {Store} from "@ngrx/store";
import {loginAction} from "../store/actions/login.actions";



@Component({
  selector: 'sc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public matcher = new AuthErrorStateMatcher();
  public R = AUTH_ROUTES;

  public signinFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6) ])
  });

  public hide = false

  constructor(
    private loginService: LoginService,
    private store: Store
  ) {}

  public handleLogin() {
    console.log(this.signinFormGroup)
    const {email, password} = this.signinFormGroup.value;
    console.log(email, password)
    this.store.dispatch(loginAction(this.signinFormGroup.value));
    // this.loginService.login({login: email, password}).subscribe(data => {
    //   console.log(data);
    // })
  }
}
