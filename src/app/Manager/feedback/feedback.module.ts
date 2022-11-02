import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackViewComponent } from './feedback-view/feedback-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [FeedbackViewComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
  ],
})
export class FeedbackModule {}
