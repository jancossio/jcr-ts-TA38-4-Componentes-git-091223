import { Component } from '@angular/core';
import { Tarea } from '../models/tarea';
import {CommonModule} from "@angular/common"

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {

  tareas: Tarea[] = [];

  borrar(codTarea:number){
    this.tareas.splice(codTarea,1);
  }

  finalizar(codTarea:number){
    this.tareas[codTarea].completada = !this.tareas[codTarea].completada;
    console.log(this.tareas[codTarea].completada);
  }

  agregarTarea(tarea: Tarea){
    this.tareas.push(tarea);
  }
}