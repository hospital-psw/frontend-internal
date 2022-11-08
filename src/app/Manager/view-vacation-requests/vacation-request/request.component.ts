<<<<<<< HEAD
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
=======
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
>>>>>>> b826a10 (Implemented UI for showing requests and modal dialog for request rejection)
import { IVacationRequest } from '../../Model/VacationRequest';
import { VacationRequestsService } from '../../service/vacation-requests.service';
import { RejectRequestDialogComponent } from '../reject-request-dialog/reject-request-dialog.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
<<<<<<< HEAD
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  @Input() request: IVacationRequest;
  clickButton: boolean = false;
  @Output() notify = new EventEmitter();
  constructor(
    public dialog: MatDialog,
    private vacationRequestService: VacationRequestsService
  ) {}

  ngOnInit(): void {}

  onAccept(id: number) {
    this.clickButton = true;
    let context = this;

    this.vacationRequestService.acceptVacationRequest(id).subscribe((res) => {
      context.notify.emit();
    });
  }

  onReject(id: number, managerComment: string) {
    let context = this;
    this.clickButton = true;
    let dialogRef = this.dialog.open(RejectRequestDialogComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'canceled') return;
      this.vacationRequestService
        .declineVacationRequest(id, managerComment)
        .subscribe((res) => {
          context.notify.emit();
        });
    });
=======
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
>>>>>>> b826a10 (Implemented UI for showing requests and modal dialog for request rejection)
  }
}
