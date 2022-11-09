import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  quantityForm = new FormGroup({
    quantity: new FormControl('')
  });

  destinationRoomForm = new FormGroup({
    room: new FormControl({})
  })

  periodForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  })

  durationForm = new FormGroup({
    duration: new FormControl()
  })

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  console(){
    console.log(this.quantityForm.value)
  }

}
