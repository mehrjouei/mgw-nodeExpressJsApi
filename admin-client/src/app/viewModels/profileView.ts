import * as moment from 'jalali-moment';


export interface IProfileView {
    BirthDate;
    Password;
    MobileNumber:String;
    Type:String;
    VerificationCode:String;
    NationalCode:String;
    Status:String;
}

export class ProfileView{
    BirthDate;
    Password:string;
    MobileNumber:String;
    Type:String;
    VerificationCode:String;
    NationalCode:String;
    Status:String;
    constructor(_prfile:IProfileView){
        this.BirthDate=_prfile.BirthDate;
        this.MobileNumber=_prfile.MobileNumber;
        this.Password=_prfile.Password;
        this.Type=_prfile.Type;
        this.VerificationCode=_prfile.VerificationCode;
        this.NationalCode=_prfile.NationalCode;
        this.Status=_prfile.Status;
    }
}

