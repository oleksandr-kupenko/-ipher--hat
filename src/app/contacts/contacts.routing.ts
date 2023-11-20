import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from "./contacts.component";

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
    children: []
  },
];

export const ContactsRoutes = RouterModule.forChild(routes);
