import { Injectable } from '@angular/core';
import { CustomAuthHttp } from './customeAuthHttp.service';
import { ConfigService } from './config.service';
import { RequestOptions, Headers } from '@angular/http';
import { CustomerView } from '../viewModels/customer/customer-view';

@Injectable()
export class CustomerService {
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

  public getCustomerByCustomerReference(customerReference): Promise<any> {
    return this.http.post(this.Config.API_Url + '/CustomerManagementService/getCustomerProfile', { customerReference }, this.options)
      .toPromise()
      .then(response => {
        return response.json() as CustomerView;
      }
      )
  }
  public getCarListByCustomerId(customerId): Promise<any> {
    return this.http.post(this.Config.API_Url + '/CustomerManagementService/getAllCustomerCar', { customerId }, this.options)
      .toPromise()
      .then(response => {
        return response.json() as CustomerView;
      }
      )
  }
  public getDongleListByCustomerId(customerId): Promise<any> {
    return this.http.post(this.Config.API_Url + '/CustomerManagementService/getCustomerDongleList', { customerId }, this.options)
      .toPromise()
      .then(response => {
        return response.json() as CustomerView;
      }
      )
  }

}
