import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../services/user.service';
import { AuthenticationService } from './../services/authentication.service';

import { User } from '../models/user.model';


@Component({
    templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent implements OnInit {

    user: User = new User();

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {}

    ngOnInit() {

        this.userService.getAuthenticatedUser().subscribe(
            (user: User) => this.user = user,
            (error: any) => console.log(error)
        );

    }

    onSignOut() {

        this.authenticationService.signOut().subscribe(
            () => this.router.navigateByUrl('/sign-out'),
            (error: any) => console.log(error)
        );

    }

}
