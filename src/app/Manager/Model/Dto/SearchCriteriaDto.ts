export interface ISearchCriteriaDto {
    buildingId: number,
    floorNumber: number,
    roomNumber: string,
    roomPurpose: string,
    workingHoursStart: Date,
    workingHoursEnd: Date
    beds: number,
    scissors: number,
    needles: number,
    bandages: number
  }