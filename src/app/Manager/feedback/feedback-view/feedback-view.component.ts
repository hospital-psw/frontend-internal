import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Feedback } from '../interface/feedback';
import { FeedbackService } from '../service/feedback.service';

/**
 * const ELEMENT_DATA: Feedback[] = [
  {creator: 'pera', message: 'ok'},
  {creator: 'lol', message: 'ne'},
  {creator: 'ana', message: 'da'},
  
];
 */

@Component({
  selector: 'app-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.scss'],
})
export class FeedbackViewComponent implements OnInit {
  STATUS: string;
  /*
  public dataSource = ELEMENT_DATA;
  */
  public dataSource = new MatTableDataSource<Feedback>();
  public displayedColumns = ['creator', 'message', 'status'];
  public feedbacks: Feedback[] = [];
  constructor(private fbservice: FeedbackService, private router: Router) {}

  ngOnInit(): void {
    this.STATUS = 'ALL';
    this.fbservice.getFeedback().subscribe((res) => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    });
  }
  getAnonymous(): void {
    this.STATUS = 'ANONYMOUS';
    this.fbservice.getAnonymous().subscribe((res) => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    });
  }
  getDenied(): void {
    this.STATUS = 'DECLINED';
    this.fbservice.getDenied().subscribe((res) => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    });
  }
  getPending(): void {
    this.STATUS = 'PENDING';
    this.fbservice.getPending().subscribe((res) => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    });
  }
  getPublic(): void {
    this.STATUS = 'PUBLIC';
    this.fbservice.getPublic().subscribe((res) => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    });
  }
  getPrivate(): void {
    this.STATUS = 'PRIVATE';
    this.fbservice.getPrivate().subscribe((res) => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    });
  }
  getApproved(): void {
    this.STATUS = 'PUBLISHED';
    this.fbservice.getApproved().subscribe((res) => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    });
  }

  public MakeApproved(id: number) {
    this.fbservice.MakeApproved(id).subscribe((res) => {
      this.STATUS = 'PUBLISHED';
      this.fbservice.getApproved().subscribe((res) => {
        this.feedbacks = res;
        this.dataSource.data = this.feedbacks;
      });
    });
  }
  public MakeDenied(id: number) {
    this.fbservice.MakeDenied(id).subscribe((res) => {
      this.STATUS = 'DECLINED';
      this.fbservice.getDenied().subscribe((res) => {
        this.feedbacks = res;
        this.dataSource.data = this.feedbacks;
      });
    });
  }
  public MakePending(id: number) {
    this.fbservice.MakePending(id).subscribe((res) => {
      this.STATUS = 'PENDING';
      this.fbservice.getPending().subscribe((res) => {
        this.feedbacks = res;
        this.dataSource.data = this.feedbacks;
      });
    });
  }
}
