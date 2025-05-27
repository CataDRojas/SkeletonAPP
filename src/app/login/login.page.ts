import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.email === 'test@duoc.cl' && this.password === '1234') {
      // Aquí haces la redirección
      this.router.navigate(['/home']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }

}
