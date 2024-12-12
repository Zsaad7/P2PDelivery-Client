import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// here i go
import { Registration } from './registration';

const routes: Routes = [
  { path: '', component: Registration }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
