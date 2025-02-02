import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [FormsModule],  // Add FormsModule here
})
export class registerModule {}
