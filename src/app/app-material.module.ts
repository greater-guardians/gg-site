import { NgModule } from "@angular/core";
import { MatSidenavModule, MatCardModule, MatButtonModule } from "@angular/material";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';

const modules = [
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
];

@NgModule({
    imports: modules,
    exports: modules
})
export class AppMaterialModule {}
