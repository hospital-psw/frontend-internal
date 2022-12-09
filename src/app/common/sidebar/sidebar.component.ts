import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() show: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
