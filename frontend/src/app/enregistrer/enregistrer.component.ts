import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  styleUrls: ['./enregistrer.component.scss']
})
export class EnregistrerComponent implements OnInit {
	
	userForm : FormGroup;

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit() {

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
            nom:['',[Validators.minLength(5),Validators.required]],
            prenom:['',Validators.minLength(3)],
            motdepasse:['',[Validators.minLength(8),Validators.required]],
      } );
  }

}
