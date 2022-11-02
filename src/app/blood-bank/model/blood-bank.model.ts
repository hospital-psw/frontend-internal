export class BloodBank {
  public id: number = 0;
  public name: string = '';
  public email: string = '';
  public apiUrl: string = '';
  public apiKey: string = '';
  public amount: number = 0;
  public getBloodTypeAvailability: string = '';
  public getBloodTypeAndAmountAvailability: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.email = obj.email;
      this.apiUrl = obj.apiUrl;
      this.apiKey = obj.apiKey;
      this.amount = obj.amount;
      this.getBloodTypeAvailability = obj.getBloodTypeAvailability;
      this.getBloodTypeAndAmountAvailability =
        obj.getBloodTypeAndAmountAvailability;
    }
  }
}
