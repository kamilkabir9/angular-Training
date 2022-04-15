import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './userhome/contactus/contactus.component';
import { DetailsComponent } from './userhome/details/details.component';
import { InboxComponent } from './userhome/inbox/inbox.component';
import { UserhomeComponent } from './userhome/userhome.component';
/** @
 *    /user/home/
 *    /user/home/details
 * */
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: UserhomeComponent
      },
      {
        path: "details",
        component: DetailsComponent
      },
      {
        path: "contactus",
        component: ContactusComponent
      },
      {
        path: "inbox",
        component: InboxComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
