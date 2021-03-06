import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
	isauth = false;


  lastUpdate = new Promise( 
      (resolve,reject) => {
        const date = new Date();
        setTimeout(
            () => {
            resolve(date);
            }, 2000
        );
      }

  );
    appareils:any[];
  
    constructor(private AppareilService: AppareilService){
    
	  	setTimeout(
	  		() => {
	  		this.isauth = true;

	 		}, 4000
	  	);
    }

    ngOnInit(){
      this.appareils = this.AppareilService.appareils;

    }

    onAllumer(){
  	  this.AppareilService.allumertout();
    }
    oneteint(){
      this.AppareilService.touteteindre();
    }
  

}
