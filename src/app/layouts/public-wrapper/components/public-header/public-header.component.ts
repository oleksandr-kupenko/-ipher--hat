import { Component } from '@angular/core';
import {AUTH_ROUTES} from "../../../../auth/auth.constants";

@Component({
  selector: 'sc-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent {
  public AUTH_ROUTES = AUTH_ROUTES;
}
