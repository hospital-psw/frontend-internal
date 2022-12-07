import { Injectable, NgModule } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable()
@NgModule()
export class JwtService {
  constructor() {}

  public decodeToken(token: string) {
    return jwtDecode(token);
  }
}
