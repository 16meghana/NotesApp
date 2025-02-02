import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  
})
export class LoginComponent {

    username = '';
    password = '';
  
    constructor(private authService: AuthService, private http: HttpClient) {}
    login() {
      this.authService.login({ userName: this.username, password: this.password })
        .subscribe(response => {
          console.log(response);  // Handle successful login response
        }, error => {
          console.error(error);  // Handle error
        });
  }
}
