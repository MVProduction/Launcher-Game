﻿import { injectable, inject } from 'inversify';
import "reflect-metadata";

export interface ILoginService {
  validateLogin(accountName: string, accountPassword: string) : boolean
}

@injectable()
export class LoginService implements ILoginService {

  readonly url: string = "http://localhost:8080/api/Login";

  validateLogin(accountName: string, accountPassword: string): boolean {
    alert("start validating login");
    var xHttpRequest: XMLHttpRequest = new XMLHttpRequest();
    xHttpRequest.open("POST", this.url, false);
    xHttpRequest.setRequestHeader("Content-type", "application/json");
    xHttpRequest.send(JSON.stringify({ accountName : accountName, accountPassword : accountPassword}));

    var response = xHttpRequest.responseText;
        
    console.log(response);
    return true;
  }
    
}


