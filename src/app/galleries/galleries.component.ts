import { Component } from '@angular/core';
import { Gallery } from '../models/gallery';
import { ImageService } from "../services/image.service";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent {
  galleries!: Gallery[];
  loading: boolean = false;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getGalleries();
  }

  getGalleries() {
    // wait for response
    this.loading = true;
    this.imageService.getAllGalleries().subscribe({
      next: data => {
        this.galleries = data;
        this.loading = false;
      },
      error: error => {
        console.error('There was an error!', error.message);
        this.loading = false;
        alert(error.message);
      }
    });
  }

}
