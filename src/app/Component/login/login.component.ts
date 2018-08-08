import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  homme = 'activ';
  femme = 'noActive';
  user: SocialUser;
  test: boolean;
  constructor(
    private socialService: AuthService,
  ) { }
  signInWithGoogle(): void {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.test = false;
    console.log(this.user);
  }
  signInWithFB(): void {
    this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.test = false;
    console.log(this.user);
  }
  signOut(): void {
    this.socialService.signOut();
  }
  civilite() {
    if (this.homme === 'activ' && this.femme === 'noActive') {
      this.homme = 'noActive';
      this.femme = 'activ';
    } else {
      this.homme = 'activ';
      this.femme = 'noActive';
    }
  }
  ngOnInit() {
    this.socialService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }

}
