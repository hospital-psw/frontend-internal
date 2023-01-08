import { IRenovationDetails } from './RenovationDetails';

export interface IRenovationRequest {
  id: number;
  renovationType: number;
  roomsId: number[];
  startTime?: Date;
  duration: number;
  renovationDetails: IRenovationDetails[];
}
