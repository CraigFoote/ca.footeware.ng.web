import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GearComponent } from './gear/gear.component';
import { WebcamComponent } from './webcam/webcam.component';

const routes: Routes = [
  { path: "gear", component: GearComponent },
  { path: "webcam", component: WebcamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
