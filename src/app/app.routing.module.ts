import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LeadersComponent } from './leaders/leaders.component';
import { AlliesComponent } from './allies/allies.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'leaders',
        component: LeadersComponent,
    },
    {
        path: 'allies',
        component: AlliesComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
    },
    // {
    //     path: 'gears'
    // },
    // {
    //     path: 'apply'
    // },
    // {
    //     path: 'resources'
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
