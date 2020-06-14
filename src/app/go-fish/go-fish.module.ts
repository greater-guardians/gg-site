import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GoFishComponent } from './go-fish.component';
import { GoFishGameComponent } from './pages/go-fish-game/go-fish-game.component';
import { GoFishInstructionsComponent } from './pages/go-fish-instructions/go-fish-instructions.component';
import { AppMaterialModule } from '../app-material.module';


@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
    ],
    declarations: [
        GoFishComponent,
        GoFishGameComponent,
        GoFishInstructionsComponent
    ],
    exports: [
        GoFishGameComponent
    ]
})
export class GoFishModule {}
