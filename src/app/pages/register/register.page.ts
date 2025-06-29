import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private usuarioService: AuthService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async onRegister() {
  const nuevoUsuario = {
    username: this.username,
    password: this.password,
    
  };

  try {
    await this.usuarioService.register(nuevoUsuario);

    const toast = await this.toastCtrl.create({
      message: 'Usuario registrado correctamente.',
      duration: 3000,
      color: 'success'
    });
    await toast.present();
    this.navCtrl.navigateRoot('/login');
  } catch (err) {
    const toast = await this.toastCtrl.create({
      message: 'Error al registrar el usuario.',
      duration: 3000,
      color: 'danger'
    });
    await toast.present();
    console.error('Error en registro:', err);
  }
}

}
