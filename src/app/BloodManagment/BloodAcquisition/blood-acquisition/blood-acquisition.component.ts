import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-blood-acquisition',
  templateUrl: './blood-acquisition.component.html',
  styleUrls: ['./blood-acquisition.component.scss']
})
export class BloodAcquisitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
