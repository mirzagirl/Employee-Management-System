import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { catchError ,tap} from 'rxjs/operators';
import { User } from 'src/app/user/user.model';
import { AppInterface } from '../appInterface/appInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  signIn=true;
  signOut=false;
  user=new Subject<User>();
  ApiKey="AIzaSyDJdbn2NLqENnDhlQ7qxTe81roMW4AV5s0";
  // ApiUrl="https://authangular-d3eab-default-rtdb.firebaseio.com/";
  ApiUrl="https://employeemangementsystem-f56c6-default-rtdb.firebaseio.com/";
  signUpUrl="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.ApiKey;
  signInUrl="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.ApiKey;

  constructor(private http:HttpClient,private routerSer:Router) { }
  onSignUp(email,password){
    return this.http.post<AppInterface>(this.signUpUrl,{email:email,password:password,returnSecureToken:true}).pipe(
      tap(res=>{
        this.authenticatedUser(res.email,res.refreshToken,res.idToken,+res.expiresIn);
       
        this.signOut=true;

      })
    )
  
  }
  onSignIn(email,password){
    return this.http.post<any>(this.signInUrl,{email,password}).pipe(
      tap(res=>{
        this.authenticatedUser(res.email,res.refreshToken,res.idToken,+res.expiresIn);
        
        this.routerSer.navigate(['Employees']);
        this.signOut=true;

      })
    );
    this.signOut=true;

  }
  private authenticatedUser(email,userId,tokenId,expiresIn){
 const expiresIn1= new Date(new Date().getTime()+expiresIn*1000);
   const user=new User(email,userId,tokenId,expiresIn1);
   console.log(user);
   this.user.next(user);
    console.log("hey User :::    " ,user);
 
  }
}
