import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { da } from "date-fns/locale";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, tap} from "rxjs"
import { environment } from "src/environments/environment";
import { JWTData } from "../interface/JWTData";
import { LoginDTO } from "../interface/LoginDTO";
import { LoginResponseDTO } from "../interface/LoginResponseDTO";
import { User } from "../model/user.model";
import { JwtService } from "./jwt.service";

@Injectable({
    providedIn: "root"
})
export class AuthService{
    private tokenExpirationTimer: any
    user = new BehaviorSubject<User>(null as any)
    api = environment.apiAuthUrl

    constructor(private http: HttpClient, 
                private toastr: ToastrService, 
                private router: Router,
                private decoder: JwtService){}

    public showSuccess(){
        this.toastr.success("You have been successfully logged in.", "Welcome back!")
    } 

    public showError(message: string){
        this.toastr.error(message, "Error!");
    }

    public isLoggedIn(){
        return !!this.user;
    }

    public login(data: LoginDTO){
        return this.http.post<LoginResponseDTO>(this.api, data).pipe(tap(response => {
            this.handleLogin(response);
        }))
    }

    private handleLogin(dto: LoginResponseDTO){
        //const data : any = this.decoder.decodeToken(token)        
        // const expirationDate = new Date(data.exp)
        // const user = new User(data.id, data.email, data.role, token, expirationDate)
        // this.user.next(user)
        // this.autoLogout(data.exp)
        // console.log(user)
        const expirationDate = new Date(new Date().getTime() + dto.expiresIn*60000);
        const user = new User(dto.id, dto.email, dto.token, expirationDate);
        this.user.next(user);
        this.autoLogout(dto.expiresIn*60000)
        localStorage.setItem('userData', JSON.stringify(user));
    }

    public logout(){
        this.user.next(null as any);
        this.toastr.success("You have been successfully logged out.","Goodbye!");
        localStorage.removeItem('userData')
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer)
        }
        this.tokenExpirationTimer = null;
    }

    public autoLogin(){
       const userData:{
        id: number,
        email: string,
        _token: string,
        _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData') || '{}');
        if(!userData){
            return;
        }

        const loadedUser = new User(userData.id, userData.email, userData._token,new Date(userData._tokenExpirationDate))

        if(loadedUser.token){
            this.user.next(loadedUser)
            this.autoLogout(new Date(userData._tokenExpirationDate).getTime() - new Date().getTime())
        }
    }

    public autoLogout(expireIn: number){
        this.tokenExpirationTimer = setTimeout(() =>{
            this.logout();
        }, expireIn)
    }
}