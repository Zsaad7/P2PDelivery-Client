import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importation de FormsModule

import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component'; // Importation de RegistrationComponent

@NgModule({
  imports: [
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RegistrationComponent // Ajout de RegistrationComponent ici
  ],
  providers: []
})
export class AppModule { }
