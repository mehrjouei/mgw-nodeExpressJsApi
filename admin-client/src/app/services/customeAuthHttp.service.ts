import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp as JwtAuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share'
import { SlimLoadingBarService } from "../modules/ng2-slim-loading-bar";
import { ModalService } from "./modal.service";
import { PreLoadingService } from './pre-loading.service';
import { ConfigService } from './config.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';



@Injectable()
export class CustomAuthHttp {
    constructor(private configService: ConfigService, private authHttp: JwtAuthHttp, private preloadingService: PreLoadingService, private router: Router, private slimLoadingBarService: SlimLoadingBarService, private modalService: ModalService) {
    }

    private isUnauthonticated(status: number): boolean {
        return status === 401;
    }

    private authIntercept(response: Observable<Response>, type = "showError"): Observable<Response> {
        this.preloadingService.showPreLoader();
        var sharableResponse = response.share();
        sharableResponse.subscribe(
            x => {
                this.preloadingService.hidePreLoader();
                let data=x.json();
                if (x.status == 200 && !data.isSuccess) {
                    this.slimLoadingBarService.complete();
                    this.modalService.showMessage(data.message);
                    throw Observable.throw(x);
                }
            }
            , (err) => {
            this.preloadingService.hidePreLoader();
            if (this.isUnauthonticated(err.status)) {
                this.slimLoadingBarService.complete();
                this.router.navigate(['/login']);
                return false;
            }
            else if (err.status == 403) {
                this.slimLoadingBarService.complete();
                this.modalService.showMessage("شما به این بخش دسترسی ندارید");
                return false;
            }
            else if (err.status == 400 || err.status == 500) {
                this.slimLoadingBarService.complete();
                this.modalService.showMessage("خطای سیستمی رخ داد");
                return false;
            }
            else if (err.status == 409 && type == "showError") {
                this.slimLoadingBarService.complete();
                this.modalService.showErrorMessage(err);
                return false;
            }

            // Other error handling may be added here, such as refresh token …
        });
        // sharableResponse.subscribe(x => {
        //     this.preloadingService.hidePreLoader();
        //     let data=x.json();
        //     if (x.status == 200 && !data.isSuccess) {
        //         this.slimLoadingBarService.complete();
        //         this.modalService.showMessage(data.message);
        //         // throw Observable.throw(x); 
        //         // throw Observable.throw(x);
        //         throw Observable.throw(x);
        //         // return new ErrorObservable(x);  
        //         // return false;
        //     }
        // })
        return sharableResponse;
    }
    public setGlobalHeaders(headers: Array<Object>, request: Request | RequestOptionsArgs) {
        this.authHttp.setGlobalHeaders(headers, request);
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.authIntercept(this.authHttp.request(url, options));
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {

        return this.authIntercept(this.authHttp.get(url, options));
    }
    public getWithoutModal(url: string, options?: RequestOptionsArgs): Observable<Response> {

        return this.authIntercept(this.authHttp.get(url, options), "dontShowError");
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {

        return this.authIntercept(this.authHttp.post(url, body, options));
    }
    public postWithoutModal(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {

        return this.authIntercept(this.authHttp.post(url, body, options), "dontShowError");
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.authIntercept(this.authHttp.put(url, options));
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.authIntercept(this.authHttp.delete(url, options));
    }

    public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.authIntercept(this.authHttp.patch(url, options));
    }

    public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.authIntercept(this.authHttp.head(url, options));
    }

    public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.authIntercept(this.authHttp.options(url, options));
    }
}
