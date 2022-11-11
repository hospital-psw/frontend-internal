import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { News } from '../model/news';
import { NewsStatus } from '../model/news-status';

const DATA: News[] = [
  {
    id: 1,
    status: NewsStatus.PENDING,
    title: 'Donacija krvi na stadionu Rajko Mitic!',
    text: 'Lorem ipsum....',
    image: 'aaa',
  },
  {
    id: 2,
    status: NewsStatus.ARCHIVED,
    title: 'Donacija krvi na stadionu JNA!',
    text: 'Lorem ipsum....',
    image: 'bbb',
  },
  {
    id: 3,
    status: NewsStatus.PUBLISHED,
    title: 'Donacija krvi na stadionu Karadjordje!',
    text: 'Lorem ipsum....',
    image: 'ccc',
  },
];

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  public dataSource = new MatTableDataSource<News>();
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
