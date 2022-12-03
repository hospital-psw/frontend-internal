import { IRenovationDetails } from './RenovationDetails';

export interface IRenovationRequest {
  renovationType: number;
  roomsId: number[];
  startTime?: Date;
  duration: number;
  renovationDetails: IRenovationDetails[];
}
