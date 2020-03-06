
import { Component, OnInit } from '@angular/core';

class Formulario{
  opcion: boolean;
  nombre: string;
  apellidos: string;
  edad: number;
  enviado: boolean;
  seleccion: boolean;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent implements OnInit {
  formulario:Formulario;

  constructor() {
    this.formulario=new Formulario();
   }

  ngOnInit() {}

  Borrar() {
    this.formulario = new Formulario();
  }

  Enviado(){
    this.formulario.enviado=true;
  }
  optionForm(){

  }

}
