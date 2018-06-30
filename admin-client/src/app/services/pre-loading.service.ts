import { Injectable } from '@angular/core';

@Injectable()
export class PreLoadingService {

  constructor() { }
  public preLoadingFlag={
    showPreLoader:true};
  showPreLoader(){
    this.preLoadingFlag.showPreLoader=true;
  }
  hidePreLoader(){
    this.preLoadingFlag.showPreLoader=false;
  }
}
