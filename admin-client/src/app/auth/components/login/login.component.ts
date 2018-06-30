import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SlimLoadingBarService } from '../../../modules/ng2-slim-loading-bar';
import { ConfigService } from '../../../services/config.service';
import { PreLoadingService } from '../../../services/pre-loading.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    title = 'app';
    errorMessages = [];
    user = {
        username: "",
        password: ""
    };
    constructor(private authenticationService: AuthenticationService,
        private _router: Router,
        private route: ActivatedRoute,
        private congigService: ConfigService,
        private preloadingService: PreLoadingService,
        private slimLoadingBarService: SlimLoadingBarService) {
    }
    DoLogin() {
        this.errorMessages = [];
        this.preloadingService.showPreLoader();
        this.authenticationService.signin(this.user.username, this.user.password)
            .subscribe(
                () => {
                    this.preloadingService.hidePreLoader();
                    this._router.navigate(["/pages/dashbourd"]);
                    // this.route
                    //     .queryParams
                    //     .subscribe(params => {
                    //         this.slimLoadingBarService.complete();
                    //         let bu = "/pages/dashbourd";
                    //         if (params.backUrl != undefined) {
                    //             bu = params.backUrl;
                    //         }
                    //         this._router.navigate([bu]);
                    //     });

                },
                (error: any) => {
                    this.preloadingService.hidePreLoader();
                    // Checks for error in response (error from the Token endpoint).
                    if (error.body != "") {
                        const body: any = error.json();

                        switch (body.message) {
                            case "Authentication failed. Wrong password.":
                                this.errorMessages.push({ description: "نام کاربری یا رمز عبور اشتباه است" });
                                break;
                            default:
                                this.errorMessages.push({ description: "خطا در ورود. لطفا دوباره سعی کنید" });
                        }
                    } else {
                        const errMsg = (error.message) ? error.message :
                            error.status ? `${error.status} - ${error.statusText}` : "Server error";
                        this.errorMessages.push({ description: "Server error. Try later." });
                    }
                    this.slimLoadingBarService.complete();
                });
    }
}
