import { Component, OnInit } from '@angular/core';
import { AuthErrorStateMatcher } from '../auth-error-state-matcher';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AUTH_ROUTES } from '../auth.constants';
import {RegisterService} from "./register.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isSubmittingSelector} from "../store/selector";

@Component({
  selector: 'sc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isSubmitting$!: Observable<boolean>; //todo test
  public matcher = new AuthErrorStateMatcher();
  public R = AUTH_ROUTES;

  public signinFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6) ]),
    confirmPassword: new FormControl('', [Validators.required ]),
    name: new FormControl('', [Validators.minLength(3), Validators.maxLength(40)]),
    uniqueNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
  });

  public hide = false;

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector)); //todo test
    this.isSubmitting$.subscribe((data) => {
      console.log('OKKKK', data);
    })
    this.signinFormGroup.get('confirmPassword')?.setValidators([Validators.required, Validators.minLength(6), this.passwordMatchValidator.bind(this)]);
  }

  constructor(private registerService: RegisterService,
              private store: Store) {
  }

  public handleRegister() {
    console.log(this.signinFormGroup.valid)
    const {email, password, confirmPassword, name, uniqueNumber} = this.signinFormGroup.value;
    console.log(email, password, confirmPassword, name, uniqueNumber)
  }

  public handleGenerateUniqueNumber(): void {
    this.registerService.getUniqueId().subscribe(data => {
      console.log(data);
      this.signinFormGroup.patchValue({uniqueNumber: data})
    })
  }

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = this.signinFormGroup.get('password')?.value;
    const confirmPassword = control.value;
    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
}

