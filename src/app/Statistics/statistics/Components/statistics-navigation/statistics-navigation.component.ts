import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-statistics-navigation',
  templateUrl: './statistics-navigation.component.html',
  styleUrls: ['./statistics-navigation.component.scss']
})
export class StatisticsNavigationComponent implements OnInit {

  constructor() { }

  currentTab: number = 0
  @Output() tabChange = new EventEmitter<number>()

  tabChanged(val: number) {
    this.tabChange.emit(val)
  }

  ngOnInit(): void {
  }

}
