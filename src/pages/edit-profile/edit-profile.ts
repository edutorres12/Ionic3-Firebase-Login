import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveProfileResult(event: Boolean){
    event ? this.navCtrl.setRoot('TabsPage') : console.log("not authenticated or saved."); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
