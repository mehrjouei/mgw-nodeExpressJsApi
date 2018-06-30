export class AccountUpdateModel {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    userName: string;
    role: number;
    userId:string;
    isActive:boolean;
    constructor(data=null){
        if (data) {
            this.firstName=data.firstName;
            this.lastName=data.lastName;
            this.password=data.password;
            this.email=data.email;
            this.userName=data.userName;
            this.role=data.role;
            this.userId=data.userId;
            this.isActive=data.isActive;
        }
        else {
            this.firstName="";
            this.lastName="";
            this.password="";
            this.email="";
            this.userName="";
            this.role= 0; 
            this.userId="";
            this.isActive=false;
        }
    }
}
