import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare var config: any;

class Config {
  API_Url: string;
  server: string;
  TOKEN_ENDPOINT: string;
  REVOCATION_ENDPOINT: string;
  USERINFO_ENDPOINT: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  GRANT_TYPE: string;
  SCOPE: string;
}

@Injectable()
export class ConfigService {
  private config: Config;

  constructor() {
    if (environment.envName == "prod") {
      this.config = <Config>config.prod;
    }
    else {
      this.config = <Config>config.dev;
    }

  }

  public Get(): Config {
    return this.config;
  }
}