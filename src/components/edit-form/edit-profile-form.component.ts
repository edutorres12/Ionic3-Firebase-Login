import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { User} from 'firebase/app';
import {Profile} from '../../models/profile/profile.interface'
import {DataService} from '../../providers/data/data.service'
import {AuthService} from '../../providers/auth/auth.service'
/**
 * Generated class for the EditComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  constructor(private auth: AuthService, private data: DataService) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    
    this.authenticatedUser$ = this.auth.getAutenticatedUser().subscribe((user:User)=>
    {
      this.authenticatedUser = user;
    })
  }

  async saveProfile() {
    if(this.authenticatedUser){
        this.profile.email = this.authenticatedUser.email;
        const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
        this.saveProfileResult.emit(result);
    }

  }

}
