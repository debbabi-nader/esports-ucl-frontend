import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './../models/user.model';


@Injectable()
export class UserService {

    constructor(
        private http: HttpClient
    ) {}

    getAuthenticatedUser(): Observable<User> {

        return this.http.get<User>('https://localhost:8443/esports/ucl/api/users/authenticated');

    }

}
