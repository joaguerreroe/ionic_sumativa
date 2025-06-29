import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioDbService } from 'src/app/services/servicio-db.service';
import { Repuesto } from 'src/app/models/repuesto';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repuesto-listar',
  templateUrl: './repuesto-listar.page.html',
  styleUrls: ['./repuesto-listar.page.scss'],
  standalone: false,
})
export class RepuestoListarPage implements OnInit, OnDestroy {
  repuestos: Repuesto[] = [];
  private repuestosSub!: Subscription;

  constructor(
    private servicioDb: ServicioDbService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.repuestosSub = this.servicioDb.listaRepuestos.subscribe(
      (data) => (this.repuestos = data)
    );
  }

  ngOnDestroy() {
    this.repuestosSub.unsubscribe();
  }

  async confirmarEliminar(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Eliminar este repuesto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.servicioDb.eliminarRepuesto(id);
          },
        },
      ],
    });

    await alert.present();
  }

 
}
