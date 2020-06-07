import { NgModule } from "@angular/core";
import { MatSidenavModule, MatCardModule } from "@angular/material";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
const modules = [
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatCardModule,
];

@NgModule({
    imports: modules,
    exports: modules
})
export class AppMaterialModule {}
