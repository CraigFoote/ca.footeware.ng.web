import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  p: string = "";
  message!: string;
  private sub: any;
  private forwardTo!: string;
  hide: boolean = true;

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.subscribeToGallerySelection();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  subscribeToGallerySelection() {
    this.sub = this.route.params.subscribe(params => {
      if (params['gallery-name'] != undefined) {
        this.forwardTo = params['gallery-name'];
      }
    });
  }

  authenticate() {
    this.message = this.authService.authenticate(this.p);
    if (this.message.length == 0) {
      this.router.navigate(['/galleries/' + this.forwardTo]);
    }
  }
}