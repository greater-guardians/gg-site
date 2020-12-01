import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app-material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LeadersComponent } from './leaders/leaders.component';
import { AlliesComponent } from './allies/allies.component';
import { GearsComponent } from './gears/gears.component';
import { RankingsComponent } from './rankings/rankings.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { GoFishModule } from './go-fish/go-fish.module';
import { HttpClientModule } from '@angular/common/http';
import { HuntingGuideComponent } from './hunting-guide/hunting-guide.component';
import { GgLevelContentComponent } from './gg-level-content/gg-level-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomePageComponent,
    LeadersComponent,
    AlliesComponent,
    GearsComponent,
    RankingsComponent,
    SnakeGameComponent,
    HuntingGuideComponent,
    GgLevelContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    GoFishModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
