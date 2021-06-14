import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any={};
  constructor(
    public api:ApiService,
    public router:Router,
    public Auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  //form validation
  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required]);

 loading:boolean | undefined;
  hide:boolean=true;

  login(user:any)
  {
    this.loading=true;
    this.Auth.signInWithEmailAndPassword(user.email, user.password).then(result=>{
      this.loading=false;
      this.router.navigate(['admin/dashboard']);
    }).catch(error=>{
      this.loading=false;
      alert('Tidak dapat login');
    })
    /*
    this.api.login(this.user.email, this.user.password).subscribe(res=>{
      localStorage.setItem('appToken',JSON.stringify(res)); 
      this.router.navigate(['admin/dashboard']);
    },error=>{
      alert('Tidak dapat login');
    });
      */
  }

}
