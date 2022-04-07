import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
/** @
 *    /user/home/
 *    /user/home/details
 * */
const routes: Routes = [
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
