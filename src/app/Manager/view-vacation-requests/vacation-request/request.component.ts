<<<<<<< HEAD
<<<<<<< HEAD
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
=======
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
>>>>>>> b826a10 (Implemented UI for showing requests and modal dialog for request rejection)
=======
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
>>>>>>> b346f01 (handle vacation request functionality implemented)
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
  @Output() notify = new EventEmitter()
  constructor(public dialog: MatDialog, private vacationRequestService: VacationRequestsService) {}

  ngOnInit(): void {
  }


  onAccept(id: number){
    this.clickButton = true;
    let context = this

    this.vacationRequestService.acceptVacationRequest(id).subscribe(res => {
      context.notify.emit()
    })
>>>>>>> b826a10 (Implemented UI for showing requests and modal dialog for request rejection)
  }

  onReject(id: number, managerComment: string){
    let context = this
    this.clickButton = true;
    let dialogRef = this.dialog.open(RejectRequestDialogComponent, {
      data: {closed: false}
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result==='canceled') return
      this.vacationRequestService.declineVacationRequest(id, managerComment).subscribe(res => {
        context.notify.emit()
      })
    })

  }
}
