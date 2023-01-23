import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from '../models/gallery';
import { Thumbnail } from '../models/thumbnail';
import { AuthService } from '../services/auth.service';
import { ImageService } from "../services/image.service";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit, OnDestroy {

  galleries: Gallery[] = [];
  loadingGalleries: boolean = false;
  loadingGallery: boolean = false;
  private sub: any;
  galleryName!: string;
  thumbnails!: Thumbnail[];

  constructor(private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.getGalleries();
    this.subscribeToGallerySelection();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getGalleries() {
    this.loadingGalleries = true;
    this.imageService.getAllGalleries().subscribe({
      next: data => {
        this.galleries = data;
        this.loadingGalleries = false;
      },
      error: error => {
        console.error('There was an error!', error.message);
        this.loadingGalleries = false;
        alert(error.message);
      }
    });
  }

  subscribeToGallerySelection() {
    this.sub = this.route.params.subscribe(params => {
      if (params['gallery-name'] != undefined) {
        this.loadingGallery = true;
        this.galleryName = params["gallery-name"];
        if (this.galleryIsSecret() && !this.authService.authenticated) {
          this.router.navigate(["/login?${galleryName}"]);
        }
        this.imageService.getGallery(this.galleryName).subscribe({
          next: data => {
            this.thumbnails = data;
            this.loadingGallery = false;
          },
          error: error => {
            console.error('There was an error!', error.message);
            this.loadingGallery = false;
            alert(error.message);
          }
        });
      }
    });
  }

  galleryIsSecret(): boolean {
    let secret = false;
    this.galleries.forEach(gallery => {
      if (this.galleryName == gallery.name) {
        secret = gallery.secret;
      }
    });
    return secret;
  }
}
