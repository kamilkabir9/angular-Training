import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../material/material.module';
import { ComplaintsComponent } from './adminhome/complaints/complaints.component';
import { ReplyComplaintComponent } from './adminhome/reply-complaint/reply-complaint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AdminhomeComponent,
    ProductListComponent,
    ComplaintsComponent,
    ReplyComplaintComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
