import { Component, OnInit, Input } from '@angular/core';
import { TokenData } from 'src/app/login/interface/TokenData';
import { LoginResponseDTO } from '../auth/interface/LoginResponseDTO';
import { UserData } from '../auth/interface/UserData';
import { User } from '../auth/model/user.model';
import { AuthService } from '../auth/service/auth.service';
import { JwtService } from '../auth/service/jwt.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() show: boolean;
  @Input() role: string;
  loggedUser: UserData;
  tokenData: TokenData;

  constructor(
    private authService: AuthService,
    private jwtService: JwtService
  ) {}

  ngOnInit(): void {}
}
