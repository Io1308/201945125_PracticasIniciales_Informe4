import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'
import { Alumno } from 'src/app/models/Alumno';

import { AplicacionService } from '../../services/aplicacion.service'

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  alumno: Alumno = {
    idAlumno: 0,
    nombres: "",
    apellidos: "",
    contra: "",
    email: "",
    cursos: "",
    creditos: 0,
  };

  constructor(private aplicacionService: AplicacionService, private router: Router) { }

  ngOnInit(): void {
  }

  recuperar(){
    delete this.alumno.nombres;
    delete this.alumno.apellidos;

    this.aplicacionService.recuperar(this.alumno)
    .subscribe(
      res => {
        alert('Contraseña Cambiada')
      },
      err => console.log(err) 
    )
  }

}
