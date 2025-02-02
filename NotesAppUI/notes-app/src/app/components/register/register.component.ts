import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [FormsModule, CommonModule],
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  register() {
    this.authService.register({ userName: this.username, password: this.password })
      .subscribe(response => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      }, error => alert('Registration failed'));
  }
}
