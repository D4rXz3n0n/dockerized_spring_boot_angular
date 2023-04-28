import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username?: string;
  public password?: string;
  public authorization?:string;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: string) {
    return this.http.get(`http://localhost:8080/`,
      { headers: { 'Access-Control-Allow-Origin':'*',authorization: this.createBasicAuthToken(username, password) },responseType:'text' as 'json' }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        if(this.authorization!=undefined)
           this.registerSuccessfulLogin(this.authorization);
      }));
  }

  createBasicAuthToken(username: string, password: string) {
    console.log(username+":"+password);
    console.log(window.btoa(username + ":" + password));
    this.authorization = window.btoa(username + ":" + password);
    return 'Basic ' + this.authorization;
  }

  registerSuccessfulLogin(authorization:string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, authorization)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = undefined;
    this.password = undefined;
    this.authorization = undefined;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
