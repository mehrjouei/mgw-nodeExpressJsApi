export class AccountModel {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    userName: string;
    role: 0;
    constructor(data=null){
        if (data) {
            this.firstName=data.firstName;
            this.lastName=data.lastName;
            this.password=data.password;
            this.email=data.email;
            this.userName=data.userName;
            this.role=data.role;
        }
        else {
            this.firstName="";
            this.lastName="";
            this.password="";
            this.email="";
            this.userName="";
            this.role= 0; 
        }
    }
}
