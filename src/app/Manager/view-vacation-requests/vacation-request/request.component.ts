import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IVacationRequest } from '../../Model/VacationRequest';
import { VacationRequestsService } from '../../service/vacation-requests.service';
import { RejectRequestDialogComponent } from '../reject-request-dialog/reject-request-dialog.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  @Input() request : IVacationRequest
  clickButton : boolean = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }


  onAccept(){
    this.clickButton = true;
    console.log("function()");
  }

  onReject(){
    this.clickButton = true;
    let dialogRef = this.dialog.open(RejectRequestDialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
    })
  }
}
