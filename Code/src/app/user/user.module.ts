import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './userhome/product/product.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { DetailsComponent } from './userhome/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './userhome/contactus/contactus.component';
import { MaterialModule } from '../material/material.module';
import { InboxComponent } from './userhome/inbox/inbox.component';
import { ViewReplyComponent } from './userhome/view-reply/view-reply.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    ProductComponent,
    ProductrowComponent,
    DetailsComponent,
    ContactusComponent,
    InboxComponent,
    ViewReplyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
