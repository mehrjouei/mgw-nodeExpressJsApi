import { Injectable } from '@angular/core';

declare var translates: any;

@Injectable()
export class TranslateService {
  translate(langKey:string):string{
    if(translates[langKey]!=undefined){
      return translates[langKey];
    }
    else{
      return "خطای کد 1004";
    }
  }
}
