import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.registerModel.password !== this.registerModel.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    // Simulate registration success
    this.router.navigate(['/login']);
  }
}
