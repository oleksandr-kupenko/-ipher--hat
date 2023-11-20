import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AUTH_ROUTES } from './auth.constants';
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: AUTH_ROUTES.login,
        component: LoginComponent
      },
      {
        path: AUTH_ROUTES.register,
        component: RegisterComponent
      },
    ]
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
