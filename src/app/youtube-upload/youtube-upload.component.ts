import { AuthService } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-youtube-upload',
  templateUrl: './youtube-upload.component.html',
  styleUrls: ['./youtube-upload.component.css']
})
export class YoutubeUploadComponent implements OnInit {
  apiKey = 'AIzaSyARlqyYi6ockihl0Qi5MTYO3qjQVwmpfsI';

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }

  upload(files) {
    let headers = {
      headers: new HttpHeaders()
        .set('authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    let formData: FormData = new FormData();
    formData.append('file', files[0]);
    const url = 'https://www.googleapis.com/upload/youtube/v3/videos?key=' + this.apiKey + '&part=contentDetails,status';
    this.http.post(url, formData, headers).subscribe(res => {
      console.log(res);
      console.log(res['id']);
    });
  }

}
