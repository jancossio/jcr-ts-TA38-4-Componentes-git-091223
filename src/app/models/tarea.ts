export class Tarea {
    constructor(
      public codigo: number,
      public titulo: string,
      public descripcion: string,
      public completada: boolean = false
    ) {} 
  }