import { Injectable } from '@angular/core';
import { CustomAuthHttp } from './customeAuthHttp.service';
import { ConfigService } from './config.service';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class OrderService {
  Config
  options
  constructor(
    private http: CustomAuthHttp,
    private ConfigService: ConfigService
  ) {
    this.Config = this.ConfigService.Get();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
  }
  public getAll(filter: any): Promise<any> {
    return this.http.post(this.Config.API_Url + '/DongleSaleOrderService/GetAll', filter, this.options)
      .toPromise()
      .then(response => {
        return response.json();
      }
      )
  }
}
