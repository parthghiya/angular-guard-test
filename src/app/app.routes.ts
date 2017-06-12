
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { DashboardComponent } from "app/components/dashboard/dashboard.component";
import { LoginComponent } from "app/components/login/login.component";
import { LoginGurardService } from "app/login-gurard.service";

const routes: Routes = [
     { path: '', redirectTo: 'dashboard',pathMatch: 'full'},  
     {path:'dashboard',component:DashboardComponent,canActivate:[LoginGurardService]},
     {path:'login',component:LoginComponent}
];

export const bmiRouters: ModuleWithProviders = RouterModule.forRoot(routes);
