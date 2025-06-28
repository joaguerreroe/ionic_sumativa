import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
  standalone: false,
})
export class FaqPage implements OnInit {


  preguntasFrecuentes = [
    {
      pregunta: '¿Cada cuánto debo hacer mantenimiento a mi auto?',
      respuesta: 'Recomendamos hacer un mantenimiento preventivo cada 10.000 km o cada 6 meses, lo que ocurra primero.'
    },
    {
      pregunta: '¿Puedo agendar una revisión técnica desde la app?',
      respuesta: 'Sí, puedes agendar directamente desde la sección "Servicios".'
    },
    {
      pregunta: '¿Qué métodos de pago aceptan?',
      respuesta: 'Aceptamos pagos con tarjetas de crédito, débito y transferencias bancarias.'
    },
    {
      pregunta: '¿Dónde están ubicados?',
      respuesta: 'Estamos en Santiago, Región Metropolitana. Puedes ver la dirección completa en la sección "Contacto".'
    },
    {
      pregunta: '¿Qué garantía tienen los productos?',
      respuesta: 'Todos nuestros productos tienen garantía mínima de 6 meses por fallas de fábrica.'
    },
    {
      pregunta: '¿Hacen envíos a regiones?',
      respuesta: 'Sí, realizamos envíos a todo Chile a través de servicios de courier.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
