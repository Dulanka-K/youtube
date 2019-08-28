import { YoutubeUploadComponent } from './youtube-upload/youtube-upload.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserVideoComponent } from './user-video/user-video.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'youtube',
    component: YoutubeUploadComponent
  },
  {
    path: 'userVideos',
    component: UserVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
