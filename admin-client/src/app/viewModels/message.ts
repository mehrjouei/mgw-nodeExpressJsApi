interface Imessage {
    name:string;
    email:string;
    phone:string;
    message:string;
}

export class Message {
    name:string;
    email:string;
    phone:string;
    message:string;
    constructor(_message: Imessage) {
        this.name=_message.name;
        this.email=_message.email;
        this.message=_message.message;
        this.phone=_message.phone;
    }
}
