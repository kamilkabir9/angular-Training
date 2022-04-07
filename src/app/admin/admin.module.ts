import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


@NgModule({
  declarations: [
    HomeComponent,
    AdminhomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
