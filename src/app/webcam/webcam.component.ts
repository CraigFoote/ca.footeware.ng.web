import { Component } from '@angular/core';

@Component({
    selector: 'app-webcam',
    templateUrl: './webcam.component.html',
    styleUrls: ['./webcam.component.css'],
    standalone: false
})
export class WebcamComponent {
  wcsource: string = "https://footeware.ca:8081";
}
