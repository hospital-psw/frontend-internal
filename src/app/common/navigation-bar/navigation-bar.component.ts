import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  @Input() name: string;

  @Output() sidebarButtonClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  showHamburger() {
    this.sidebarButtonClicked.emit('Button Clicked!');
  }
}
