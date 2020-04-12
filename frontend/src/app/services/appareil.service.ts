export class AppareilService{
	appareils=[
  		{
        id:1,
  			name:'machine a laver',
  			status:'allumer'
  		},
  		{
        id:2,
  			name:'television',
  			status:'allumer'
  		},
  		{
        id:3,
  			name:'ordinateur',
  			status:'eteint'
  		}

  ];
  getAppareilById(id:number){
    const appareil = this.appareils.find(
    (appareilObject) => {
    return appareilObject.id === id;

    });
    return appareil;
  }

  allumertout(){
      for(let appareil of this.appareils){
        appareil.status='allumer';
      }
    }
  touteteindre(){
      for(let appareil of this.appareils){
        appareil.status='eteint';
      }
    }
  allumer( i:number){
    this.appareils[i].status='allumer';
  }
  eteindre( i:number){
    this.appareils[i].status='eteint';
  }
  

}