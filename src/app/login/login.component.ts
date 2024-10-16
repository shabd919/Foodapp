import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel = {
    email: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private router: Router) { }

  onSubmit() {
    // Simulate login
    if (this.loginModel.email === 'user@example.com' && this.loginModel.password === 'password') {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
