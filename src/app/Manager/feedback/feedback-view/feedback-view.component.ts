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
  styleUrls: ['./feedback-view.component.scss']
})
export class FeedbackViewComponent implements OnInit {


/*
  public dataSource = ELEMENT_DATA;
  */
 public dataSource = new MatTableDataSource<Feedback>();
  public displayedColumns = ['creator', 'message', 'approve', 'deny'];
  public feedbacks: Feedback[] = [];
  constructor(private fbservice: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.fbservice.getFeedback().subscribe(res => {
      this.feedbacks = res;
      this.dataSource.data = this.feedbacks;
    })
  }
}
