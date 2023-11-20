import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AuthComponent} from "./auth.component";
import {StoreModule} from "@ngrx/store";


import * as authReducers from 'src/app/auth/store/reducers';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutes,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    StoreModule.forFeature(authReducers.authFeatureKey, authReducers.authReducer)
  ]
})
export class AuthModule { }
