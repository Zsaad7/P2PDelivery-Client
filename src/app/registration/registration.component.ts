import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username = '';
  password = '';

  onSubmit() {
    // Handle form submission logic here, e.g., send data to a backend server
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
