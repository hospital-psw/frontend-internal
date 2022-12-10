import { Component, Input } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IPatient } from '../interface/ipatient';


@Component({
  selector: 'app-block-patients-view',
  templateUrl: './block-patients-view.component.html',
  styleUrls: ['./block-patients-view.component.scss']
})
export class BlockPatientsViewComponent {
}
