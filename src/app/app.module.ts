import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { YoutubeUploadComponent } from './youtube-upload/youtube-upload.component';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserVideoComponent } from './user-video/user-video.component';

export function provideConfig() {
  return config;
}

const googleLoginOptions: LoginOpt = {
  scope: 'profile email https://www.googleapis.com/auth/youtube.force-ssl'
};
 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("46660554208-qdtpdimir6hni2le5e8bkpdqff7dksei.apps.googleusercontent.com",googleLoginOptions)
  }
])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    YoutubeUploadComponent,
    UserVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
