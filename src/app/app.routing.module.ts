import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LeadersComponent } from './leaders/leaders.component';
import { AlliesComponent } from './allies/allies.component';
import { RankingsComponent } from './rankings/rankings.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { GoFishComponent } from './go-fish/go-fish.component';
import { HuntingGuideComponent } from './hunting-guide/hunting-guide.component';
import { GgLevelContentComponent } from './gg-level-content/gg-level-content.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
    },
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
        path: 'rankings',
        component: RankingsComponent,
    },
    {
        path: 'snake',
        component: SnakeGameComponent,
    },
    {
        path: 'fish',
        component: GoFishComponent,
    },
    {
        path: 'guide',
        component: HuntingGuideComponent,
    },
    {
        path: 'contest',
        component: GgLevelContentComponent,
    },
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
