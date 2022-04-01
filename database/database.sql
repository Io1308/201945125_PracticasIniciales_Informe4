CREATE DATABASE Aplicacion;

use Aplicacion;

create table alumnos(
idAlumno int,
nombres varchar(25),
apellidos varchar(25),
contraseña varchar(15),
email varchar(30),
primary key(idAlumno)
);

create table catedraticos(
idCatedratico int,
nombre varchar(50),
cursos varchar(50),
primary key(idCatedratico)
);

create table cursos(
idCurso int,
nombre varchar(30),
catedraticos varchar(50),
primary key(idCurso)
);

create table publicaciones(
idPublicacion int, 
idAlumno int, 
idCurso int,
idCatedratico int,
publicacion varchar(500),
comentario varchar(500),
primary key(idPublicacion),
foreign key(idAlumno) references alumnos(idAlumno),
foreign key(idCurso) references cursos(idCurso),
foreign key(idCatedratico) references catedraticos(idCatedratico)
);