import { Component, OnInit } from '@angular/core';

import { TeamService } from './../services/team.service';

import { Team } from './../models/team.model';


@Component({
    templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {

    teams: Team[] = [];

    constructor(
        private teamService: TeamService
    ) {}

    ngOnInit() {

        this.teamService.getTeams().subscribe(
            (teams: Team[]) => this.teams = teams,
            (error: any) => console.log(error)
        );

    }

}
