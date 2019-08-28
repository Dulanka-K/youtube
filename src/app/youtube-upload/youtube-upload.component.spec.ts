import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeUploadComponent } from './youtube-upload.component';

describe('YoutubeUploadComponent', () => {
  let component: YoutubeUploadComponent;
  let fixture: ComponentFixture<YoutubeUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
