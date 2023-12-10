import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tarea } from '../models/tarea';


@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrl: './formulario-tarea.component.css'
})
export class FormularioTareaComponent {

  constructor() {}

  @Output() onGuardar: EventEmitter<Tarea> = new EventEmitter<Tarea>();

  @ViewChild("formTitulo")
  formTitulo!: ElementRef;

  @ViewChild("formDescripcion")
  formDescripcion!: ElementRef;

  GrupoForm = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl('')
  });

  guardar(){
    console.log('Enviado');
    let nuvTarea: Tarea = new Tarea(0,'','');
    nuvTarea.titulo = this.GrupoForm.value.titulo!;
    nuvTarea.descripcion = this.GrupoForm.value.descripcion!;
    this.onGuardar.emit(nuvTarea);
    this.GrupoForm.reset();
  }
}
