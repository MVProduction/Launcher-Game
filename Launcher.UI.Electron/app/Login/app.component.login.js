"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_service_1 = require("../Services/login.service");
var LoginModel = (function () {
    function LoginModel() {
    }
    return LoginModel;
}());
exports.LoginModel = LoginModel;
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.LoginModel = new LoginModel();
        this.LoginService = loginService;
    }
    LoginComponent.prototype.LoginButtonClicked = function (event) {
        alert("Account Name: " + this.LoginModel.AccountName + "\nPassword: " + this.LoginModel.Password);
        this.LoginService.ValidateLogin(this.LoginModel.AccountName, this.LoginModel.Password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './app/Login/app_component_login.html',
        styleUrls: ['./app/Login/app_component_login.css'],
        viewProviders: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=app.component.login.js.map