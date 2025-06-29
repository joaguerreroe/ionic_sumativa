export class Repuesto {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public precio: number,
    public stock: number,
    public categoria: string,
    public marca: string,
    public vehiculoCompatible: string, // o un array si aplican varios
    public imagen?: string // opcional, URL base64 o path
  ) {}
}
