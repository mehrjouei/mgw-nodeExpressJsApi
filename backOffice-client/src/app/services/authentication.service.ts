import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CustomAuthHttp } from './customeAuthHttp.service';
import { Headers, Response, RequestOptions } from '@angular/http';

import { BrowserStorage } from './browser-storage.service';
import { ConfigService } from './config.service';

/**
 * ROPC Authentication service.
 */
@Injectable() export class AuthenticationService {

    private Config;
    constructor(
        private http: CustomAuthHttp,
        private browserStorage: BrowserStorage,
        private configService: ConfigService
    ) {
        this.Config = configService.Get();
    }

    public signin(email: string, password: string): Promise<any> {
        const tokenEndpoint: string = this.Config.TOKEN_ENDPOINT;
        const params: any = {
            username: email,
            password: password,
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.postWithoutModal(tokenEndpoint, params,options)
            .toPromise()
            .then((res: Response) => {
                const body: any = res.json();
                if (typeof body.token !== "undefined") {
                    this.store(body);
                }
            })
            .catch()
    }

    public signout(): void {
        this.browserStorage.remove("user_info");
    }

    private store(body: any): void {
        this.browserStorage.set("id_token", body.token);
        this.browserStorage.set("loggedIn_user", body.user);
    }

    public getUser(): any {
        // if (this.tokenNotExpired()) {
        //     return JSON.parse(this.browserStorage.get("user_info"));
        // }
        // return new User();
    }

    private storeUser(user: any): void {
        this.browserStorage.set("user_info", JSON.stringify(user));
    }


}
