import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ComplaintsComponent } from './adminhome/complaints/complaints.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: AdminhomeComponent
      },
      {
        path: "contactus",
        component: ComplaintsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
