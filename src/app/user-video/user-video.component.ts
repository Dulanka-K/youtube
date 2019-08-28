import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-video',
  templateUrl: './user-video.component.html',
  styleUrls: ['./user-video.component.css']
})
export class UserVideoComponent implements OnInit {
  videos = [];

  constructor(private a : DomSanitizer) { 
    //get videos
    
    this.videos.push(a.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+'Hnh0NtGtSuM'+'?enablejsapi=1'));
  }

  ngOnInit() {
  }

}
