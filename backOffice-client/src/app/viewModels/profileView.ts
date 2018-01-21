export interface IProfileView {
    ProfileId:number
    NationalCode:string
    BirthDate
    Password:string
    MobileNumber:string
    Type:string
    Status:string
    VerificationCode:string
}

export class ProfileView{
    ProfileId:number
    NationalCode:string
    BirthDate
    Password:string
    MobileNumber:string
    Type:string
    Status:string
    VerificationCode:string
    constructor(_profile:IProfileView){
        this.BirthDate=_profile.BirthDate;
        this.MobileNumber=_profile.MobileNumber;
        this.NationalCode=_profile.NationalCode;
        this.Password=_profile.Password;
        this.ProfileId=_profile.ProfileId;
        this.Status=_profile.Status;
        this.Type=_profile.Type;
        this.VerificationCode=_profile.VerificationCode;
    }
}

