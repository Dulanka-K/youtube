import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  loggedIn = false;
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      localStorage.setItem('token',user.authToken);
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  constructor(private authService: AuthService) { }

  signInWithGoogle(): void {
    console.log('signin');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
