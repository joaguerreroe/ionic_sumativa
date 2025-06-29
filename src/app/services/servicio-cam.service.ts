import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class ServicioCamService {
  public photo: Photo | null = null;

  constructor() {}

  // Tomar foto desde cámara
  async capturarFoto(): Promise<Photo> {
    const captura: Photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photo = captura;
    return captura;
  }

  // Seleccionar imagen desde galería
  async seleccionarDeGaleria(): Promise<Photo> {
    const seleccion: Photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,  // ✅ Esta es la galería
      quality: 100
    });

    this.photo = seleccion;
    return seleccion;
  }

  // Obtener solo la parte base64 (sin encabezado)
  async readAsBase64(foto: Photo): Promise<string> {
    return foto.dataUrl?.split(',')[1] || '';
  }
}
