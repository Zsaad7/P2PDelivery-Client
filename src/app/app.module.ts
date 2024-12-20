/*import { HttpClientModule } from '@angular/common/http';*/
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { RegistrationComponent } from './registration.component';*/

@NgModule({
  declarations: [
    /*AppComponent,*/
    /*RegistrationComponent*/
  ],
  imports: [
    BrowserModule, /*HttpClientModule,*/
    AppRoutingModule
  ],
  providers: [],
 /* bootstrap: [AppComponent]*/
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);  // Manually bootstrap the main component
  }
}
