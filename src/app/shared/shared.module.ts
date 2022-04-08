import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MaterialModule } from '../material/material.module';
import { ScrollDirective } from './directives/scroll.directive';
import { ScrollBackDirective } from './directives/scroll-back.directive';



@NgModule({
  declarations: [
    MenuOutlineComponent,
    ScrollDirective,
    ScrollBackDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[MenuOutlineComponent, ScrollDirective,
    ScrollBackDirective]
})
export class SharedModule { }
