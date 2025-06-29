import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  
})
export class HomePage {

  productos = [
    {
      nombre: 'Taladro Bosch',
      precio: 49990,
      imagenUrl: 'https://th.bing.com/th/id/OIP.FkClm063NxArSOXqYzVtLAHaHZ?rs=1&pid=ImgDetMain',
    },
    {
      nombre: 'Caja Herramientas Stanley',
      precio: 29990,
      imagenUrl: 'https://th.bing.com/th/id/R.5f6a0daccf5ad2ab274729d940fafa36?rik=mEDyzqpg6z8nxw&pid=ImgRaw&r=0',
    },
    {
      nombre: 'Destornillador Eléctrico',
      precio: 19990,
      imagenUrl: 'https://th.bing.com/th/id/OIP.J_CTH_aYLTURu65aZmz43QHaGK?rs=1&pid=ImgDetMain',
    },
  ];

  constructor(private router: Router) {}




  redServicios(){
    console.log("presionaste catalogo en home")
    this.router.navigate(['/services']);
  }

  redCatalogo(){
    console.log("presionaste catalogo en home")
    this.router.navigate(['/catalogo']);
  }


}
