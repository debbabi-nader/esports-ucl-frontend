import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { TeamsComponent } from './teams/teams.component';


const APP_ROUTES: Routes = [

    {
        path: 'app',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                component: TeamsComponent
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'sign-out',
        component: SignOutComponent
    },
    {
        path: '**',
        redirectTo: 'app',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
