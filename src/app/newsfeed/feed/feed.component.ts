import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from 'src/app/Manager/feedback/service/feedback.service';
import { News } from '../model/news';
import { NewsStatus } from '../model/news-status';
import { NewsfeedService } from '../service/newsfeed.service';

const DATA: News[] = [
  {
    id: 1,
    status: NewsStatus.PENDING,
    title: 'Donacija krvi na stadionu Rajko Mitic!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci erat, sodales ut nisi quis, lobortis mattis mi. Donec dictum non velit sed efficitur. Morbi pulvinar neque arcu, a laoreet odio dictum et. Donec mauris libero, blandit condimentum fringilla sit amet, gravida in ex. Mauris viverra vel dolor sed consectetur. Suspendisse vitae ante bibendum, ultrices mauris at, luctus nibh. Nunc vulputate massa ac nunc gravida blandit. Vivamus laoreet nec tortor id euismod. Vestibulum mollis, turpis vitae maximus blandit, massa purus vehicula ex, in volutpat quam diam non arcu. Duis scelerisque libero quis gravida viverra. Suspendisse et interdum tortor. Sed tortor diam, fringilla vitae sem et, cursus fringilla metus.',
    image: 'aaa',
    dateCreated: new Date(),
  },
  {
    id: 2,
    status: NewsStatus.ARCHIVED,
    title: 'Donacija krvi na stadionu JNA!',
    text: 'Lorem ipsum....',
    image: 'bbb',
    dateCreated: new Date(),
  },
  {
    id: 3,
    status: NewsStatus.PUBLISHED,
    title: 'Donacija krvi na stadionu Karadjordje!',
    text: 'Lorem ipsum....',
    image: 'ccc',
    dateCreated: new Date(),
  },
];

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  public allNews: News[];
  public allStatusTypes = NewsStatus;
  private displayedDataStatus: string;
  public displayedColumns = ['title', 'text', 'status', 'image', 'action'];

  constructor(
    private newsfeedService: NewsfeedService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.displayedDataStatus = 'ALL';
    this.newsfeedService.getAll().subscribe((res) => {
      this.allNews = res;
    });
  }

  getPublished() {
    this.displayedDataStatus = 'PUBLISHED';
    this.newsfeedService.getPublished().subscribe((res) => {
      this.allNews = res;
    });
  }

  getArchived() {
    this.displayedDataStatus = 'ARCHIVED';
    this.newsfeedService.getArchived().subscribe((res) => {
      this.allNews = res;
    });
  }

  getPending() {
    this.displayedDataStatus = 'PENDING';
    this.newsfeedService.getPending().subscribe((res) => {
      this.allNews = res;
    });
  }

  archive(id: number) {
    this.newsfeedService.archive(id).subscribe((res) => {
      this.toastr.warning('Successfully archived news!');
      this.getAll();
    });
  }

  publish(id: number) {
    this.newsfeedService.publish(id).subscribe((res) => {
      this.toastr.success('Successfully published news!');
      this.getAll();
    });
  }
}
