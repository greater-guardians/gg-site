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

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomePageComponent,
    LeadersComponent,
    AlliesComponent,
    GearsComponent,
    RankingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
