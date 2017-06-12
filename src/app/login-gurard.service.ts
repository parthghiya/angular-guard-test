import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class LoginGurardService implements CanActivate  {

  constructor(private router:Router) { }

   canActivate() {
    var login = localStorage.getItem('loggedin');
    console.log("login" +login);
    if(login === "true"){
     return true;
    }else{
      this.router.navigate(['login']);      
      return false; 
    }
    
  }

}
