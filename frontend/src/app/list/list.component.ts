import { Component, OnInit,OnDestroy } from '@angular/core';
import { User} from "../models/User.model";
import{ Subscription } from 'rxjs';
import { UserService} from '../services/user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnDestroy{
	users:User[];
	userSubscription : Subscription ;

  constructor( private  userservice: UserService) { }

  ngOnInit() {
  	this.userSubscription = this.userservice.userSubject.subscribe(
  	(user:User[]) => {
  					this.users=user;
  	});
  	this.userservice.emitUser()
  }
  ngOnDestroy(){
  	  	this.userSubscription.unsubscribe();
  }

}
