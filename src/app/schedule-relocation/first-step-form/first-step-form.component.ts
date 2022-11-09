import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-step-form',
  templateUrl: './first-step-form.component.html',
  styleUrls: ['./first-step-form.component.scss']
})
export class FirstStepFormComponent implements OnInit {

  @Input() quantity: FormControl
  constructor() { }

  ngOnInit(): void {
  }

}
