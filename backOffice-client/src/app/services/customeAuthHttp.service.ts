import { Injectable } from '@angular/core';
import { Http, Request,Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp as JwtAuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
// import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {ModalComponent} from "../shared/modal/modal.component";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class CustomAuthHttp {

    constructor(
      private authHttp: JwtAuthHttp,
      private router: Router,
      private modalService: NgbModal,
    //   private slimLoader: SlimLoadingBarService
    ) {
    }

  private isUnauthorized(status: number): boolean {
    return status === 401;
  }

    private authIntercept(response: Observable<Response> ,type="showError"): Observable<Response> {
        var sharableResponse = response.share();
        // this.slimLoader.start();
        sharableResponse.subscribe(null, (err) => {
            if (this.isUnauthorized(err.status)) {
                // this.slimLoader.complete();
                this.router.navigate(['/auth/login']);
                return false;
            }
            else if (err.status==403) {
            //   this.slimLoader.complete();
              const activeModal = this.modalService.open(ModalComponent, { size: 'sm', backdrop: 'static' });
              activeModal.componentInstance.modalHeader = 'خطای 403';
              activeModal.componentInstance.modalContent = `شما به این بخش دسترسی ندارید`;
              return false;
            }
            else if (err.status==400 || err.status==500){
            //   this.slimLoader.complete();
              const activeModal = this.modalService.open(ModalComponent, { size: 'sm', backdrop: 'static' });
              activeModal.componentInstance.modalHeader = 'خطای سیستمی';
              activeModal.componentInstance.modalContent = `خطای سیستمی رخ داده است.`;
              return false;
            }
            else if (err.status === 409 && type === 'showError') {
            //   this.slimLoader.complete();
              const activeModal = this.modalService.open(ModalComponent, { size: 'sm', backdrop: 'static' });
              activeModal.componentInstance.modalHeader = 'خطا';
              activeModal.componentInstance.modalContent = err.ErrorCode;
              return false;
            }
            // Other error handling may be added here, such as refresh token …
        });
        return sharableResponse;
    }
    public setGlobalHeaders(headers: Array<Object>, request: Request | RequestOptionsArgs) {
        this.authHttp.setGlobalHeaders(headers, request);
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.authIntercept(this.authHttp.request(url, options));
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            if (options.headers) {
                options.headers.append('partyId', '1');
            }
            else {
                let headers = new Headers({ 'partyId': '1' });
                options.headers = headers;
            }
        }
        else {
            let headers = new Headers({ 'partyId': '1' });
            options = new RequestOptions({ headers: headers });
        }
        return this.authIntercept(this.authHttp.get(url, options));
    }
    public getWithoutModal(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            if (options.headers) {
                options.headers.append('partyId', '1');
            }
            else {
                let headers = new Headers({ 'partyId': '1' });
                options.headers = headers;
            }
        }
        else {
            let headers = new Headers({ 'partyId': '1' });
            options = new RequestOptions({ headers: headers });
        }
        return this.authIntercept(this.authHttp.get(url, options),"dontShowError");
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            if (options.headers) {
                options.headers.append('partyId', '1');
            }
            else {
                let headers = new Headers({ 'partyId': '1' });
                options.headers = headers;
            }
        }
        else {
            let headers = new Headers({ 'partyId': '1' });
            options = new RequestOptions({ headers: headers });
        }
        return this.authIntercept(this.authHttp.post(url, body, options));
    }
    public postWithoutModal(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            if (options.headers) {
                options.headers.append('partyId', '1');
            }
            else {
                let headers = new Headers({ 'partyId': '1' });
                options.headers = headers;
            }
        }
        else {
            let headers = new Headers({ 'partyId': '1' });
            options = new RequestOptions({ headers: headers });
        }
        return this.authIntercept(this.authHttp.post(url, body, options),"dontShowError");
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
