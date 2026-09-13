import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-webcam',
    templateUrl: './webcam.component.html',
    styleUrls: ['./webcam.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WebcamComponent {
  wcsource: string = "https://footeware.ca:8081";
}
