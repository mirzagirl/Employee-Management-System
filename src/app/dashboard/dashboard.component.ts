import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  signed=false;
  s="signIn"
  constructor(private authSerObj:AuthServiceService,private routerSer:Router) { }

  ngOnInit(): void {
    this.authSerObj.user.subscribe(res=>{
      this.signed=!!res;    })
  }
  cha(){
    if(this.s=="signIn"){
    this.s="signOut"}
    else {
      this.s="signIn"; 
      this.routerSer.navigate(['']);
        
    }
  }



}
