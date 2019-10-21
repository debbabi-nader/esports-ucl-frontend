import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Team } from './../models/team.model';


@Injectable()
export class TeamService {

    constructor(
        private http: HttpClient
    ) {}

    getTeams(): Observable<Team[]> {

        return this.http.get<Team[]>('https://localhost:8443/esports/ucl/api/teams');

    }

}
