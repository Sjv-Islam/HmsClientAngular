import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRequest } from '../auth-request';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  model!: AuthRequest;
  authService = inject(AuthService);
  router = inject(Router);
  constructor() {
    this.model = new AuthRequest();
  }
  login(event: Event) {
    event.preventDefault();

    console.log(`Login: ${this.model.email} / ${this.model.password}`);

    this.authService
      .login(this.model)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
