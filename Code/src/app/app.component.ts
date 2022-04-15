import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-more-features';

  constructor(private log:LoginService,private router:Router){
          
  }

  ngAfterViewInit(){
    if(!this.log.getStatus()){
                
      this.router.navigate(['login'])
   }
   else{
     if(this.log.usertype=="admin")
       this.router.navigate(['admin/home']);
     else
       this.router.navigate(['user/home']);
   }
  }
}
