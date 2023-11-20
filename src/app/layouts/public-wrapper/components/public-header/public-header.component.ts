import { Component } from '@angular/core';
import {AUTH_ROUTES} from "../../../../auth/auth.constants";
import {CONTACTS_ROUTES} from "../../../../contacts/contacts.constants";

@Component({
  selector: 'sc-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent {
  public AUTH_ROUTES = AUTH_ROUTES;
  public CONTACTS_ROUTES = CONTACTS_ROUTES;
}
