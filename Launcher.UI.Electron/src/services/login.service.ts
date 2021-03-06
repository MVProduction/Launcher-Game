﻿import { injectable, inject } from 'inversify';
import "reflect-metadata";
const config = require('../../endpointconfig.json');

export interface ILoginService {
  validateLogin(accountName: string, accountPassword: string) : boolean
}

@injectable()
export class LoginService implements ILoginService {

  private url: string = config.ApiEndpoints.LoginEndpoint;

  validateLogin(accountName: string, accountPassword: string): boolean {
    alert("start validating login");
    var xHttpRequest: XMLHttpRequest = new XMLHttpRequest();
    xHttpRequest.open("POST", this.url, false);
    xHttpRequest.setRequestHeader("Content-type", "application/json");

    xHttpRequest.send(JSON.stringify({
      accountName: accountName.toLocaleLowerCase(),
      accountPassword: accountPassword
    }));

    var response = xHttpRequest.responseText;

    console.log(response);
    if (response.search("true") === -1) {
        return false;
    }
    return true;    
  }
    
}


