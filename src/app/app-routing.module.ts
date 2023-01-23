import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GearComponent } from './gear/gear.component';
import { WebcamComponent } from './webcam/webcam.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: "gear", component: GearComponent },
  { path: "webcam", component: WebcamComponent },
  { path: "galleries", component: GalleriesComponent },
  { path: "galleries/:gallery-name", component: GalleriesComponent },
  { path: "login/:gallery-name", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
