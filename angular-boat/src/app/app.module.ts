import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoatsComponent } from './boats/boats.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { FormsModule } from '@angular/forms';
import { AddBoatComponent } from './add-boat/add-boat.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from'./http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    BoatsComponent,
    BoatDetailsComponent,
    AddBoatComponent,
    MessagesComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
   {
     provide: HTTP_INTERCEPTORS,
     useClass: HttpInterceptorService,
     multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
