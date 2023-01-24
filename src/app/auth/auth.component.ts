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
  u: string = "";
  p: string = "";
  error!: string;
  private sub: any;
  private forwardTo!: string;
  hide: boolean = true;

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.subscribeToSecretSelection();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  subscribeToSecretSelection() {
    this.sub = this.route.params.subscribe(params => {
      if (params['gallery-name'] != undefined) {
        this.forwardTo = params['gallery-name'];
      }
    });
  }

  authenticate(form: NgForm) {
    this.u = form.value.nameInput;
    this.p = form.value.passwordInput;
    this.error = this.authService.authenticate(this.u, this.p);
    if (this.error.length == 0) {
      this.router.navigate(['/galleries/' + this.forwardTo]);
    }
  }
}