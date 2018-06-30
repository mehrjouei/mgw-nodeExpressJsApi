export class DongleView {
    id: string;
    serialNumber: string;
    dongleTypeTitle: string;
    constructor(data = null) {
        if (data) {
            this.id = data.id;
            this.serialNumber = data.serialNumber;
            this.dongleTypeTitle = data.dongleTypeTitle;
        }
        else {
            this.id="";
            this.serialNumber="";
            this.dongleTypeTitle="";
        }
    }
}