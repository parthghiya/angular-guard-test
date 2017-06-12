import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginGurardService } from "app/login-gurard.service";
import { LoginService } from "app/login.service";
import { bmiRouters } from "app/app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    bmiRouters
  ],
  providers: [LoginGurardService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
