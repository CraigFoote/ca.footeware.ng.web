import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentApplicationVersion = environment.appVersion;
  wallpaper!: any;

  constructor(private imageService: ImageService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.wallpaper = this.imageService.getRandomImage();
    this.renderer.setStyle(document.body, 'background-image', "url('https://footeware.ca:8000/galleries/Artsy-Fartsy/random')");
  }
}
