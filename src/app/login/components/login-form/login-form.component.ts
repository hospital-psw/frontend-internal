import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponseDTO } from 'src/app/common/auth/interface/LoginResponseDTO';
import { JwtService } from 'src/app/common/auth/service/jwt.service';
import { TokenData } from '../../interface/TokenData'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(private authService: AuthService, private router: Router, private jwtService: JwtService) {}

  hide = true;
  defaultRemember = false;
  showError = false;
  errorMessage = '';
  isLogging = false;
  tokenData : TokenData;

  navigateByRole(token: string) : void {
    this.tokenData = this.jwtService.decodeToken(token) as any;
    if (this.tokenData.role === 'Doctor'){
      this.router.navigate(['app/appointments'])
    } else if (this.tokenData.role === 'Admin'){
      this.router.navigate(['app/display'])
    }
  }

  onSubmit(form: NgForm) {
    this.showError = false;
    this.isLogging = true;
    if (form.value.rememberMe == null) {
      form.value.rememberMe = false;
    }
    this.authService.login(form.value).subscribe(
      (response: LoginResponseDTO) => {
        this.authService.showSuccess();
        this.navigateByRole(response.token)
        //this.router.navigate(['app']);
        this.isLogging = false;
      },
      (message) => {
        this.showError = true;
        this.errorMessage = message;
        form.resetForm();
      }
    );
  }
}
