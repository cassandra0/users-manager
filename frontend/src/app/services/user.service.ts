import {User} from '../models/User.model';
import {Subject} from 'rxjs';


export class UserService{
	private users:User[]=[

		{
			nom:'cass',
			prenom:'cassu',
			login:'azerty',
			email:'kabdjoujoelle@gmail.com',
			motdepasse:'maman123'
		}
	];
	userSubject = new Subject<User[]>();

	emitUser(){
		this.userSubject.next(this.users.slice())
	}

	addUser(user:User){
		this.users.push(user);
		this.emitUser();
	}
}