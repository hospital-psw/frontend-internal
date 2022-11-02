import { Component, OnInit } from '@angular/core';
import { RecommendedDatesDTO } from '../interface/RecommendedDatesDTO';
import { ScheduleAppointmentDTO } from '../interface/ScheduleAppointmentDTO';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {
  
  redirectAppointment:ScheduleAppointmentDTO
  recommendedDates: RecommendedDatesDTO[];
  
  
  constructor() {}

  ngOnInit(): void {}

 acceptData(data:ScheduleAppointmentDTO){
  
  this.redirectAppointment = data;
  console.log(data)
 }

 acceptDates(value: RecommendedDatesDTO[]){
    this.recommendedDates = value;
 }
}
