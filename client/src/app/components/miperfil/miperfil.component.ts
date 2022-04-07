import { Component, OnInit, HostBinding} from '@angular/core';
import { Router } from '@angular/router'

import { AplicacionService } from '../../services/aplicacion.service'

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})

export class MiperfilComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  alumno: any = [];

  constructor(private aplicacionService: AplicacionService) { }

  ngOnInit(): void {
    let idAlumno = localStorage.getItem('usuario') || ""
    this.aplicacionService.verPerfil(idAlumno)
      .subscribe(
        res => {
          this.alumno = res;
          console.log(res)
        },
        err => console.log(err));
        console.log(this.alumno);
  }

  miPerfil(){
    let idAlumno = localStorage.getItem('usuario') || ""
    this.aplicacionService.verPerfil(idAlumno)
      .subscribe(
        res => {
          this.alumno = res;
          console.log(this.alumno)
        },
        err => console.log(err));
    console.log(this.alumno);
  }

}
