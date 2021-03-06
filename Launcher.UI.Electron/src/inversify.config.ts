﻿import { Container } from 'inversify';
import {  ILoginService, LoginService } from "./services/login.service";
import { ICreateAccount, CreateAccountService } from './services/create.account.service'
import { IMainMenuService, MainMenuService } from './services/main.menu.service'
import { IGameService, GameService } from './services/game.service'
import { TYPES } from "./RegitredTypes"


var iocContainer = new Container();
iocContainer.bind<ILoginService>(TYPES.ILoginService).to(LoginService);
iocContainer.bind<ICreateAccount>(TYPES.ICreateAccount).to(CreateAccountService);
iocContainer.bind<IMainMenuService>(TYPES.IMainMenuService).to(MainMenuService);
iocContainer.bind<IGameService>(TYPES.IGameService).to(GameService);

export { iocContainer };