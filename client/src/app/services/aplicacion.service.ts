import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Alumno} from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Crear Usuario
  signUp(alumno: Alumno){
      return this.http.put(`${this.API_URI}/signup`, alumno)
  }

  //Logearse
  signIn(alumno: Alumno){
    return this.http.post(`${this.API_URI}/signin`, alumno);
  }

  //Ver MiPerfil
  verPerfil(idAlumno: string){
      return this.http.get(`${this.API_URI}/miperfil/${idAlumno}`)
  }

  //Recuperar Contraseña
    recuperar(alumno: Alumno){
        return this.http.post(`${this.API_URI}/recuperar`, alumno)
    } 

  //Crear Publicacion
  // crearPubli(publicacion){
      //put
  // }

  //Crear Comentario
  // crearComent(comentario){
      //put
  // }

  //Añadir Curso
  // añadirCurso(curso){
      //put
  // }

  //Ver Perfil
  // verPerfil(){
      //get
  // }

  //Ver Perfil
  // verPerfil(){
      //get
  // }

  //Lista Publicaciones
  // publicaciones(){
      //get
  // }

  //Ordenar Publicaciones
  // publicaciones(){
      //get
  // }
}
