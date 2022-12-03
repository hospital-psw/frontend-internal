import { RenovationTypeEnum } from './Enum/RenovationType';

export interface IRenovationRequestDisplay {
  id: number;
  renovationType: RenovationTypeEnum;
  startTime: Date;
  duration: number;
}
