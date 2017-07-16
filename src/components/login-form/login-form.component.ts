import { Component, EventEmitter, Output } from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {Account} from '../../models/account/account.interface';
import { LoginResponse } from  '../../models/login/login-response.interface';
import { AuthService } from '../../providers/auth/auth.service';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

    account= {} as Account; 
    @Output() loginStatus: EventEmitter<LoginResponse>;
  
  constructor( private auth: AuthService,private navCtrl:NavController) {
    
    this.loginStatus = new EventEmitter<LoginResponse>();

  }

  async login(){

    const result= await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);

 

  }
  // navigateToPage(pageName: string){
  //  pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }
    navigateToRegisterPage(){
      this.navCtrl.push('RegisterPage');
    }

}
