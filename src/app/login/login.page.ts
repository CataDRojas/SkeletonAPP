import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  username: string = '';
  password: string = '';

constructor(private router: Router) { }

//Aqui validamos que el usuario tenga entre 3 y 8 caracteres alfanumericos
isUsernameInvalid(): boolean {
  return !this.username || !/^[a-zA-Z0-9]{3,8}$/.test(this.username);
}

//Aqui validamos que la contraseña sea numerica de 4 digitos
isPasswordInvalid(): boolean {
  return !this.password || !/^\d{4}$/.test(this.password);
}

login(form: any) {
  if(this.isUsernameInvalid() || this.isPasswordInvalid()) {
    alert('¡Ups! Debes ingresar datos válidos.');
    return;
  }
  (document.activeElement as HTMLElement)?.blur();
  
  this.router.navigate(['/home'], {
    queryParams: {user: this.username}
  });
  }

  


}
