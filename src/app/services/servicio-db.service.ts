import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Repuesto } from '../models/repuesto';

@Injectable({
  providedIn: 'root',
})
export class ServicioDbService {
  public database!: SQLiteObject;

  // SQL para crear la tabla de repuestos
  private sqlCrearRepuestos: string = `
    CREATE TABLE IF NOT EXISTS repuesto (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      descripcion TEXT,
      precio REAL,
      stock INTEGER,
      categoria TEXT,
      marca TEXT,
      vehiculoCompatible TEXT,
      imagen TEXT
    )
  `;

  // Observable para manejar repuestos en tiempo real
  public listaRepuestos = new BehaviorSubject<Repuesto[]>([]);
  private isDBReady = new BehaviorSubject<boolean>(false);

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    this.platform.ready().then(() => {
      this.crearBD();
    });
  }

  getDatabaseState() {
    return this.isDBReady.asObservable();
  }

  // Toast
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'information-circle',
    });
    await toast.present();
  }

  // Alert
  async presentAlerte(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Crear base de datos
  crearBD() {
    this.sqlite
      .create({
        name: 'repuestos.db',
        location: 'default',
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      })
      .catch((e) => {
        this.presentToast('Error al crear BD: ' + e);
      });
  }

  // Crear tabla de repuestos
  async crearTablas() {
    try {
      await this.database.executeSql(this.sqlCrearRepuestos, []);
      this.buscarRepuestos();
      this.isDBReady.next(true);
    } catch (e) {
      this.presentToast('Error al crear tabla: ' + e);
    }
  }

  // Insertar nuevo repuesto
  async agregarRepuesto(repuesto: Omit<Repuesto, 'id'>) {
    const sql = `INSERT INTO repuesto (nombre, descripcion, precio, stock, categoria, marca, vehiculoCompatible, imagen)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const data = [
      repuesto.nombre,
      repuesto.descripcion,
      repuesto.precio,
      repuesto.stock,
      repuesto.categoria,
      repuesto.marca,
      repuesto.vehiculoCompatible,
      repuesto.imagen,
    ];
    try {
      await this.database.executeSql(sql, data);
      this.presentToast('Repuesto guardado');
      this.buscarRepuestos();
    } catch (e) {
      this.presentToast('Error al guardar repuesto: ' + e);
    }
  }

  // Obtener todos los repuestos
  async buscarRepuestos(): Promise<void> {
    try {
      const res = await this.database.executeSql('SELECT * FROM repuesto', []);
      const items: Repuesto[] = [];
      for (let i = 0; i < res.rows.length; i++) {
        const r = res.rows.item(i);
        items.push(
          new Repuesto(
            r.id,
            r.nombre,
            r.descripcion,
            r.precio,
            r.stock,
            r.categoria,
            r.marca,
            r.vehiculoCompatible,
            r.imagen
          )
        );
      }
      this.listaRepuestos.next(items);
    } catch (e) {
      this.presentToast('Error al obtener repuestos: ' + e);
    }
  }

  // Actualizar repuesto existente por id
  async actualizarRepuesto(repuesto: Repuesto) {
    const sql = `UPDATE repuesto SET
                  nombre = ?,
                  descripcion = ?,
                  precio = ?,
                  stock = ?,
                  categoria = ?,
                  marca = ?,
                  vehiculoCompatible = ?,
                  imagen = ?
                 WHERE id = ?`;
    const data = [
      repuesto.nombre,
      repuesto.descripcion,
      repuesto.precio,
      repuesto.stock,
      repuesto.categoria,
      repuesto.marca,
      repuesto.vehiculoCompatible,
      repuesto.imagen,
      repuesto.id
    ];
    try {
      await this.database.executeSql(sql, data);
      this.presentToast('Repuesto actualizado');
      this.buscarRepuestos();
    } catch (e) {
      this.presentToast('Error al actualizar repuesto: ' + e);
    }
  }

  // Eliminar repuesto por id
  async eliminarRepuesto(id: number) {
    const sql = `DELETE FROM repuesto WHERE id = ?`;
    try {
      await this.database.executeSql(sql, [id]);
      this.presentToast('Repuesto eliminado');
      this.buscarRepuestos();
    } catch (e) {
      this.presentToast('Error al eliminar repuesto: ' + e);
    }
  }
}
