import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MenuOutlineComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
