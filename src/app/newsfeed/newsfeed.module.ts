import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, MaterialModule],
})
export class NewsfeedModule {}
