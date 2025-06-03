import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  fechaNacimiento: string = '';

constructor(private route: ActivatedRoute, private alertCtrl: AlertController) {
    this.route.queryParams.subscribe(params => {
      if (params['user']) {
        this.username = params['user'];
      }
    });
  }

onFechaChange(event: any) {
  this.fechaNacimiento = event.detail.value ?? '';
  }

// Variables para controlar animación
  animarNombre: boolean = false;
  animarApellido: boolean = false;

  limpiarCampos() {
  this.nombre = '';
  this.apellido = '';
  this.educacion = '';
  this.fechaNacimiento = '';

  this.animarNombre = true;
  this.animarApellido = true;

// Remover la clase animación después de 1s para permitir futura activación
setTimeout(() => {
  this.animarNombre = false;
    this.animarApellido = false;
  }, 1000);
}

async mostrarInfo() {
  const alert = await this.alertCtrl.create({
    header: '¡Listo!',
    message: 
  'Su nombre es ' + this.nombre + ' ' + this.apellido,
    buttons: ['OK'],
  });

  await alert.present();
  }
}
