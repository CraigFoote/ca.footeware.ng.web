import { Component } from '@angular/core';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent {
  wcsource: string = "http://foote:bogie97@footeware.ca:8081/MJPEG.CGI?.mjpeg";
}
