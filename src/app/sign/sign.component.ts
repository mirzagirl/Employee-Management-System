import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  loginMode = false
  signMode = "SignIn"
  signMode1 = "SignUp"
  form: FormGroup;
  errMess:String;
  authObservable: Observable<any>;
  constructor(private http: HttpClient, private fr: FormBuilder, private authSerObj: AuthServiceService,private errorServiceObj:ErrorService) {
    this.form = this.fr.group({
      Email: ['', [Validators.email, Validators.required]],
      Password: ['', [Validators.minLength(6), Validators.required]]
    })
    
  }

  toChange() {

    if (this.loginMode) {
      this.signMode1 = "SignUp";
      this.signMode = "SignIn";
    }
    else {
      this.signMode = "SignUp";
      this.signMode1 = "SignIn";
    }
    this.loginMode = !this.loginMode;
  }
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form.value.Email);
    const email = this.form.value.Email;
    const password = this.form.value.Password;
    if (this.form.valid && !this.loginMode) {
this.authObservable=
      this.authSerObj.
        onSignUp(email, password);
    }
    else   {
      this.authObservable  =this.authSerObj.onSignIn(email, password);
    }
    this.authObservable.
    subscribe((reponce) => {
      console.log(reponce);
    },
       (err) => {
         this.errMess=this.errorServiceObj.errorArray[err.error.error.message];
         console.log(err.error.error.message);
         console.log(this.errorServiceObj.errorArray[err.error.error.message]); }
    );
  }

}
