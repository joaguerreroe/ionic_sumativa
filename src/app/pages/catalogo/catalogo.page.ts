import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: false,
})
export class CatalogoPage implements OnInit {

  productos = [
    {
      nombre: 'Filtro de Aceite',
      precio: 8500,
      imagenUrl: 'https://www.euroespecialista.cl/images/img-productosx.php?f=_n960003-1.jpg'
    },
    {
      nombre: 'Aceite 10W-40',
      precio: 19900,
      imagenUrl: 'https://www.euroespecialista.cl/images/img-productosx.php?f=_n905021-1.jpg'
    },
    {
      nombre: 'Batería 12V',
      precio: 54900,
      imagenUrl: 'https://th.bing.com/th/id/OIP.TIWyiSU6U229E4qakM5CnwHaHa?rs=1&pid=ImgDetMain'
    },
    {
      nombre: 'Juego de Pastillas de Freno',
      precio: 32900,
      imagenUrl: 'https://th.bing.com/th/id/R.ead4d26dd4e58cc4009f02bd586f994e?rik=Q97RwXTNQrcokg&pid=ImgRaw&r=0'
    },
    {
      nombre: 'Limpiaparabrisas',
      precio: 6900,
      imagenUrl: 'https://http2.mlstatic.com/plumillas-limpiaparabrisas-auto-bosch-nissan-qashqai-10-16-D_NQ_NP_670294-MLC31212131340_062019-F.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
