import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: false,
})
export class ServicesPage implements OnInit {
  
  servicios = [
    {
      titulo: 'Chequeo General',
      descripcion: 'Revisión completa del estado mecánico y electrónico de tu automóvil. Incluye revisión de frenos, luces, batería y fluidos.',
      icono: 'build_circle',
      precio: 25000
    },
    {
      titulo: 'Cambio de Aceite',
      descripcion: 'Cambio de aceite y filtro, con aceite de calidad recomendado para tu motor.',
      icono: 'oil_barrel',
      precio: 32000
    },
    {
      titulo: 'Diagnóstico por Computadora',
      descripcion: 'Escaneo completo del sistema electrónico del vehículo con equipo OBD-II profesional.',
      icono: 'memory',
      precio: 20000
    },
    {
      titulo: 'Alineación y Balanceo',
      descripcion: 'Servicio completo de alineación y balanceo para una conducción estable y segura.',
      icono: 'track_changes',
      precio: 28000
    },
    {
      titulo: 'Carga de Aire Acondicionado',
      descripcion: 'Recarga y revisión del sistema de climatización del vehículo.',
      icono: 'ac_unit',
      precio: 30000
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
