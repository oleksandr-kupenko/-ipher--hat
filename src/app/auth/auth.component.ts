import { Component } from '@angular/core';

@Component({
  selector: 'sc-auth',
  template: `<div class="d-flex flex-column justify-content-center h-100    ">
    <router-outlet></router-outlet>
  </div>
    `,
  styles: [''],
})
export class AuthComponent {

}
