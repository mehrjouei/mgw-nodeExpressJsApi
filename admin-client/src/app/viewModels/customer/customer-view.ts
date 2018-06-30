export class CustomerView {
    customerId: string;
    fullTitle: string;
    phoneNumber: string;
    registredDongleCount: number;
    registredLicenseCount: number;
    userCarCount: number;
    activatedLicenseCount: number;
    availableLicenseToActivate: number;
    description?: any;
    constructor(data = null) {
        if (data) {
            this.customerId = data.customerId;
            this.fullTitle = data.fullTitle;
            this.phoneNumber = data.phoneNumber;
            this.registredDongleCount = data.registredDongleCount;
            this.registredLicenseCount = data.registredLicenseCount;
            this.userCarCount = data.userCarCount;
            this.activatedLicenseCount = data.activatedLicenseCount;
            this.availableLicenseToActivate = data.availableLicenseToActivate;
            this.description=data.description;
        }
        else {
            this.customerId="";
            this.fullTitle="";
            this.phoneNumber="";
            this.registredDongleCount=0;
            this.registredLicenseCount=0;
            this.userCarCount=0;
            this.activatedLicenseCount=0;
            this.availableLicenseToActivate=0;
            this.description="";
        }
    }
}
