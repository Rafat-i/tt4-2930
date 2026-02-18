import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  program = '';
  errorMessage = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  submit() {
    this.authService.signup(this.name, this.email, this.password, this.program).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/materials']);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error?.error ?? err.message ?? 'Signup failed';
      }
    });
  }
}
