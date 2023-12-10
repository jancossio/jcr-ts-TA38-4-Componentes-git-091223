import { Component } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {

  tareas: Tarea[] = [];

  borrar(codTarea:number){
    console.log('Eliminado');
    const index = this.tareas.findIndex(tarea => tarea.codigo === codTarea);
    this.tareas.splice(index,1);
  }

  tachar(codTarea:number){
    const index = this.tareas.findIndex(tarea => tarea.codigo === codTarea);
    this.tareas[index].completada = true;
  }

  agregarTarea(tarea: Tarea){
    this.tareas.push(tarea);
  }
}