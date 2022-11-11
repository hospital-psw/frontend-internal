import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { News } from '../model/news';
import { NewsStatus } from '../model/news-status';

const DATA: News[] = [
  {
    id: 1,
    status: NewsStatus.PENDING,
    title: 'Donacija krvi na stadionu Rajko Mitic!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci erat, sodales ut nisi quis, lobortis mattis mi. Donec dictum non velit sed efficitur. Morbi pulvinar neque arcu, a laoreet odio dictum et. Donec mauris libero, blandit condimentum fringilla sit amet, gravida in ex. Mauris viverra vel dolor sed consectetur. Suspendisse vitae ante bibendum, ultrices mauris at, luctus nibh. Nunc vulputate massa ac nunc gravida blandit. Vivamus laoreet nec tortor id euismod. Vestibulum mollis, turpis vitae maximus blandit, massa purus vehicula ex, in volutpat quam diam non arcu. Duis scelerisque libero quis gravida viverra. Suspendisse et interdum tortor. Sed tortor diam, fringilla vitae sem et, cursus fringilla metus.',
    image: 'aaa',
    dateCreated: new Date()
  },
  {
    id: 2,
    status: NewsStatus.ARCHIVED,
    title: 'Donacija krvi na stadionu JNA!',
    text: 'Lorem ipsum....',
    image: 'bbb',
    dateCreated: new Date()
  },
  {
    id: 3,
    status: NewsStatus.PUBLISHED,
    title: 'Donacija krvi na stadionu Karadjordje!',
    text: 'Lorem ipsum....',
    image: 'ccc',
    dateCreated: new Date()
  },
];

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  public dataSource = new MatTableDataSource<News>();
  public allNews = DATA;
  public allStatusTypes = NewsStatus;
  private displayedDataStatus: string;
  public displayedColumns = ['title', 'text', 'status', 'image', 'action'];

  constructor() {}

  ngOnInit(): void {
    this.getAll();
    this.dataSource = new MatTableDataSource<News>(DATA);
  }

  getAll() {
    this.displayedDataStatus = 'ALL';
    // this.service.all()
  }

  getPublished() {
    this.displayedDataStatus = 'PUBLISHED';
    // this.service.all()
  }

  getArchived() {
    this.displayedDataStatus = 'ARCHIVED';
    // this.service.all()
  }

  getPending() {
    this.displayedDataStatus = 'PENDING';
    // this.service.all()
  }
}
