import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private httpClient: HttpClient) {}
    // Methods for the encrypt and decrypt Using AES
    private apiUrl = environment.apiUrl + 'Account/';

    //https://audit.ewoapi.acacy.com.vn/api/Account/Login

    login(login_name: string, password: string,fcm_token: string) {
        return this.httpClient.post(this.apiUrl + 'Login', {
            login_name,
            password,
            fcm_token
        });
    }

    forgotPassword(project_id: number, login_name: string, email: string) {
        return this.httpClient.post(this.apiUrl + 'ForgotPassword', {
            project_id,
            login_name,
            email,
        });
    }
    SendOTPtoEmail(project_id: number, email: string, uuid: string) {
        return this.httpClient.post(this.apiUrl + 'SendOTPtoEmail', {
            project_id,
            email, uuid
        });
    } 
    
    ConfirmOTP(project_id: number,email: string,otp: string,token: string, timeCheck: string) {
        return this.httpClient.put(this.apiUrl + 'ConfirmOTP', {
            project_id,
            email, otp,token,timeCheck
        });
    } 
}