import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from '../models/gallery';
import { Thumbnail } from '../models/thumbnail';
import { ImageService } from "../services/image.service";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit, OnDestroy {

  galleries!: Gallery[];
  loading: boolean = false;
  private sub: any;
  galleryName!: string;
  thumbnails!: Thumbnail[];

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGalleries();
    this.getSelectedGallery();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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

  getSelectedGallery() {
    this.sub = this.route.params.subscribe(params => {
      if (params['gallery-name'] != undefined) {
        this.loading = true;
        this.galleryName = params['gallery-name'];
        this.imageService.getGallery(this.galleryName).subscribe({
          next: data => {
            this.thumbnails = data;
            this.loading = false;
          },
          error: error => {
            console.error('There was an error!', error.message);
            this.loading = false;
            alert(error.message);
          }
        });
      }
    });
  }
}
