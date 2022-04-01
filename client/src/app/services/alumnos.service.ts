import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private htpp: HttpClient) { }

  //Crear Usuario
  // signUp(alumno){
      //put
  // }

  //Logearse
  // signIn(alumno){
  //   return this.htpp.post(`${this.API_URI}/signin`);
  // }

  //Recuperar Contraseña
  //  

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
