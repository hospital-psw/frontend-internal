export interface ISearchCriteriaDto {
  buildingId: number;
  floorNumber: number;
  roomNumber: string;
  roomPurpose: string;
  workingHoursStart: Date;
  workingHoursEnd: Date;
  equipmentType: number;
  quantity: number;
}
