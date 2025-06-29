import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioDbService } from 'src/app/services/servicio-db.service';
import { Router } from '@angular/router';
import { ServicioCamService } from 'src/app/services/servicio-cam.service';
import { Photo } from '@capacitor/camera';

@Component({
  selector: 'app-repuesto-crear',
  templateUrl: './repuesto-crear.page.html',
  styleUrls: ['./repuesto-crear.page.scss'],
  standalone: false,
})
export class RepuestoCrearPage implements OnInit {
  public vistadefoto: string | undefined;
  repuestoForm!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private servicioDb: ServicioDbService,
    private router: Router,
    private serviciocamara:ServicioCamService
  ) {}

  ngOnInit() {
    this.repuestoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      categoria: [''],
      marca: [''],
      vehiculoCompatible: [''],
      imagen: [''],
      
    });
  }

  async guardar() {
    if (this.repuestoForm.invalid) {
      return;
    }

    await this.servicioDb.agregarRepuesto(this.repuestoForm.value);
    this.repuestoForm.reset();
    this.router.navigate(['/repuesto-listar']);
  }
  
  selectedImageBase64: string = '';

  async tomarFoto(): Promise<void> {
    
  const foto: Photo = await this.serviciocamara.capturarFoto();
  this.vistadefoto = foto.dataUrl;
  this.selectedImageBase64 = foto.dataUrl || '';
  // Esta línea asegura que se guarda en el formulario
  this.repuestoForm.patchValue({ imagen: foto.dataUrl });
}

async seleccionarImagen(): Promise<void> {
  const foto = await this.serviciocamara.seleccionarDeGaleria();
  this.vistadefoto = foto.dataUrl;
  this.repuestoForm.patchValue({ imagen: foto.dataUrl });
}

}
