export class MonthlyTransfer {
  public dateTime: Date;
  public aPlus: Number = 0;
  public aMinus: Number = 0;
  public bPlus: Number = 0;
  public bMinus: Number = 0;
  public aBPlus: Number = 0;
  public aBMinus: Number = 0;
  public oPlus: Number = 0;
  public oMinus: Number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.dateTime = obj.DateTime;
      this.aPlus = obj.APlus;
      this.aMinus = obj.AMinus;
      this.bPlus = obj.BPlus;
      this.bMinus = obj.BMinus;
      this.aBPlus = obj.ABPlus;
      this.aBMinus = obj.ABMinus;
      this.oPlus = obj.OPlus;
      this.oMinus = obj.OMinus;
    }
  }
}
