import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GearComponent } from './gear/gear.component';

const routes: Routes = [
  { path: "gear", component: GearComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
