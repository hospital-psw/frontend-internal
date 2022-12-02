import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponseDTO } from 'src/app/common/auth/interface/LoginResponseDTO';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private authService: AuthService, private router: Router) { }

  hide = true;
  defaultRemember = false
  showError = false;
  errorMessage = ''
  isLogging = false;

  onSubmit(form: NgForm){
    this.showError = false
    this.isLogging = true;
    if(form.value.rememberMe == null){
      form.value.rememberMe = false
    }
    this.authService.login(form.value).subscribe(
      (response: LoginResponseDTO) =>{
        this.authService.showSuccess();
        this.router.navigate(['appointments'])
        this.isLogging=false
      },
      message =>{
        this.showError = true
        this.errorMessage = message;
        form.resetForm();
      }
    )
  }
}
