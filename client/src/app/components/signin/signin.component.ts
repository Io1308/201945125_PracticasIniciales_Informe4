import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'
import { Alumno } from 'src/app/models/Alumno';

import { AplicacionService } from '../../services/aplicacion.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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

  iniciar(){
    delete this.alumno.nombres;
    delete this.alumno.apellidos;
    delete this.alumno.contra;

    this.aplicacionService.recuperar(this.alumno)
    .subscribe(
      res => {
        location.href="http://localhost:4200/muro";
        localStorage.setItem('usuario', this.alumno.idAlumno.toString());
        console.log(res)
      },
      err => console.log(err) 
    )
  }

}
