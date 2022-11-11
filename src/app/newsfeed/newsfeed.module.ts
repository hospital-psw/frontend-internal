import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { MaterialModule } from '../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { News } from './model/news';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, MaterialModule],
})
export class NewsfeedModule {}
