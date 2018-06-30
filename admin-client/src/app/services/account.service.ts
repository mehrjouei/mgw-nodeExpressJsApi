import { Injectable } from '@angular/core';
import { CustomAuthHttp } from './customeAuthHttp.service';
import { ConfigService } from './config.service';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AccountService {
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
  public getAll(): Promise<any> {
    return this.http.get(this.Config.API_Url + '/AccountService/GetAll')
      .toPromise()
      .then(response => {
        return response.json();
      }
      )
  }
  public getById(id): Promise<any> {
    return this.http.post(this.Config.API_Url + '/AccountService/GetById',{id}, this.options)
      .toPromise()
      .then(response => {
        return response.json();
      }
      )
  }
  public create(data): Promise<any> {
    return this.http.post(this.Config.API_Url + '/AccountService/add', data, this.options)
      .toPromise()
      .then(response => {
        return response.json();
      }
      )
  }
  public update(data): Promise<any> {
    return this.http.post(this.Config.API_Url + '/AccountService/update', data, this.options)
      .toPromise()
      .then(response => {
        return response.json();
      }
      )
  }
  public resetPassword(data): Promise<any> {
    return this.http.post(this.Config.API_Url + '/AccountService/ResetPassword', data, this.options)
      .toPromise()
      .then(response => {
        return response.json();
      }
      )
  }
  public active(userId): Promise<any> {
    return this.http.post(this.Config.API_Url + '/AccountService/activate', {userId}, this.options)
      .toPromise()
      .then(response => {
        return response.json();
      }
      )
  }
  public deactive(userId): Promise<any> {
    return this.http.post(this.Config.API_Url + '/AccountService/Deactivate', {userId}, this.options)
      .toPromise()
      .then(response => {
        return response.json();
      }
      )
  }
}
