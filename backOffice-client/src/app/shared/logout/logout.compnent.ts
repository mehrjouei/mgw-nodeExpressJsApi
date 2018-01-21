import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'nb-logout',
  template: `
  `,
})
export class NbLogOutComponent {
    constructor(
      private auth:AuthenticationService,
      private _router: Router
    ){

    }
    ngOnInit(){
      this.auth.signout();
      this._router.navigate(['/auth/login']);
    }
}