import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { XsrfInterceptor } from './interceptors/xsrf.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

import { UserService } from './services/user.service';
import { TeamService } from './services/team.service';
import { AuthenticationService } from './services/authentication.service';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { TeamsComponent } from './teams/teams.component';


@NgModule({
    declarations: [
        AppComponent,
        AppLayoutComponent,
        SignOutComponent,
        TeamsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: XsrfInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
        UserService,
        TeamService,
        AuthenticationService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
