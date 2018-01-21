import { Injectable } from '@angular/core';

declare var config: any;

class Config {
  API_Url :string;
  server :string;
  TOKEN_ENDPOINT :string;
  SignUp_Url :string;
  verify_Url :string;
  REVOCATION_ENDPOINT :string;
  USERINFO_ENDPOINT :string;
  IPG_URL :string;
  IPG_DEALER_BACKURL:string;
  CHARGE_IPG_ORDER_BACKURL:string;
  BOLTON_IPG_ORDER_BACKURL:string;
  CLIENT_ID :string;
  GRANT_TYPE :string;
  SCOPE :string;
}

@Injectable()
export class ConfigService {
  private config: Config;

  constructor() {
    this.config = <Config>config;
  }

  public Get(): Config {
    return this.config;
  }
}