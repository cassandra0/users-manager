import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router} from '@angular/router';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
	authStatus:boolean;
  userForm : FormGroup;

  constructor( private authservice: AuthService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
  		this.authStatus=this.authservice.isauth;
      this.initform();
  }

  onsubmit(){
        const formvalue = this.userForm.value;
        console.log('formvalue');
  }


  initform(){
      this.userForm = this.formbuilder.group({
            login:['',[Validators.minLength(5),Validators.required]],
            email:['',[Validators.email,Validators.required]],
      } );
  }
  connexion(){
  	this.authservice.connexion().then(
  			() => {
  			this.authStatus=this.authservice.isauth;
  			this.router.navigate(['appareil']);
  			}

  	)
  }

  deconnexion(){
  	this.authservice.deconnexion();
  	this.authStatus=false;
  	//console.log('deconnexion');
  }
  

}
