import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormularioTareaComponent } from "./formulario-tarea/formulario-tarea.component";
import { ListaTareasComponent } from "./lista-tareas/lista-tareas.component";

import { Tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormularioTareaComponent, ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jcr-ts-TA38-4-Componentes-git-091223';

  @ViewChild(ListaTareasComponent, {static : true}) listaTareasComponent: ListaTareasComponent | undefined;

  ngOnInit() {
  }

  nuevaTarea(tarea: Tarea){
    this.listaTareasComponent?.agregarTarea(tarea);
  }
}