import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationService {

    constructor(
        private http: HttpClient
    ) {}

    signOut(): Observable<void> {

        return this.http.post<void>('https://localhost:8443/esports/ucl/logout', {});

    }

}
