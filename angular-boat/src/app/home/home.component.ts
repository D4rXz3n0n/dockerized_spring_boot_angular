import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../auth.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }
  title = 'Welcome in OpenWebTechnology test ! ';
  authenticated = sessionStorage.getItem("authenticatedUser");
  ngOnInit(): void {
  }

  login():void{
    this.router.navigate(["/login"]);
  }
  logout():void{
     this.authService.logout();
     this.router.navigate(["/login"]);
  }

}
