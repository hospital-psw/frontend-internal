import { Component, OnInit } from '@angular/core';
import { BloodRequestService } from '../../services/blood-request.service';
import { BloodRequest } from 'src/app/Manager/Model/BloodRequest';

@Component({
  selector: 'app-request-decline-dialog',
  templateUrl: './request-decline-dialog.component.html',
  styleUrls: ['./request-decline-dialog.component.scss'],
})
export class RequestDeclineDialogComponent implements OnInit {
  constructor(private bloodRequestService: BloodRequestService) {}

  ngOnInit(): void {}
}
