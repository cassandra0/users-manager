export class AuthService{
	isauth= false;
	connexion(){
		return new Promise( 
      (resolve,reject) => {
        setTimeout(
            () => {
            this.isauth = true;
            resolve(true);
            }, 2000
        );
      }

  		);
	}
    

    deconnexion(){
    	this.isauth=false;
    }
}