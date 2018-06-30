import { Injectable } from '@angular/core';
import { ConfigService } from "./config.service";
import { TranslateService } from "./translate.service";
import { Modal } from "ng2-modal";


@Injectable()
export class ModalService {
    private Config: any;
    public messageModal: Modal;
    public modalMessage:string;
    public submitButtonLabel:string="";
    public cancelButtonLabel="بستن";
    public modalOnSubmit:any;
    constructor(private configService: ConfigService,private TranslateService:TranslateService) {
        this.Config=configService.Get();
        this.messageModal=new Modal();
        console.log(this.messageModal);
    }
    showMessage(message:string){
        this.submitButtonLabel="";
        this.modalMessage = message;
        this.setValues();
        this.messageModal.open();
    }
    showErrorMessage(error:any){
        this.submitButtonLabel="";
        this.modalMessage = this.TranslateService.translate(JSON.parse(error._body).ErrorCode);
        this.messageModal.open();
    }
    showConfirm(){
        this.setValues();
        this.messageModal.open();
    }
    close(){
        this.messageModal.close();
    }
    private setValues(){
        this.messageModal.submitButtonLabel=this.submitButtonLabel;
        this.messageModal.cancelButtonLabel=this.cancelButtonLabel;
    }
}
