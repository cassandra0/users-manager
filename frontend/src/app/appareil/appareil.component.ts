import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

	@Input() appareilName: string;
	@Input() appareilStatus: string;
  @Input() index : number ;

  constructor( private AppareilService: AppareilService) { }

  ngOnInit() {
    }
  getstatus(){
  	return this.appareilStatus;
  
  }
  getcolor(){
  	if(this.appareilStatus==='allumer'){
  		return 'green';
  	}else if(this.appareilStatus==='eteint'){
  		return 'red';
  	}
  }
    allumer(){
      this.AppareilService.allumer(this.index);
    }
    eteindre(){
      this.AppareilService.eteindre(this.index);
    }

}
