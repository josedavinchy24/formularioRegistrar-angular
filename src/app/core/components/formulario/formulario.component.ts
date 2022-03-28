import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Registro } from './registro';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  registro: Registro

  constructor() {
    this.registro = new Registro(0,"","","","","","")
    
   }
   
  ngOnInit(): void {
  }
  onSubmit(){
    alert("SE REGISTRO CORRECTAMENTE")
  }
}
