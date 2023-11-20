import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicWrapperComponent } from './layouts/public-wrapper/public-wrapper.component';

const routes: Routes = [  {
  path: '',
  component: PublicWrapperComponent,
  children: [
    { path: '', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
    { path: '', loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule) },
  ],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
