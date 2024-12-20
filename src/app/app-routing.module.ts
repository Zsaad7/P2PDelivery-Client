import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// here i go
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
