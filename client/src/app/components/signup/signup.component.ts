import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';

import { AplicacionService } from '../../services/aplicacion.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  alumno: Alumno = {
    idAlumno: 0,
    nombres: "",
    apellidos: "",
    contra: "",
    email: "",
    cursos: "",
    creditos: 0,
  };

  constructor(private aplicacionService: AplicacionService) { }

  ngOnInit(): void {
  }

  registro(){
    this.aplicacionService.signUp(this.alumno)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err) 
    )
  }

}
