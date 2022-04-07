import express from 'express';

import pool from '../database';

class IndexController {

    //Crear Alumno
    public async signUp(req: express.Request, res: express.Response): Promise<any> {
        const body = req.body;

        const result = await pool.query('INSERT INTO alumnos set ?', [req.body]);
        res.json({ message: 'Alumno Creado' });
    }

    //Recuperar Contraseña
    public async recuperar(req: express.Request, res: express.Response): Promise<any> {
        const body = req.body;

        const id = await pool.query('SELECT * FROM alumnos WHERE idAlumno = ?', [body.idAlumno]);
        if (id.length > 0) {
            const email = await pool.query('SELECT * FROM alumnos WHERE email = ?', [body.email]);
                if(email.length != 0){
                    await pool.query('UPDATE alumnos set contra = ? WHERE email = ?', [body.contra, body.email]);
                    res.json({info: 'contraseña recuperada'});
                    console.log('contraseña recuperada');
                }
        }
        res.status(404).json({ text: "Carnet o Email incorrectos" });
        console.log('F')
    }

    //Iniciar Sesion
    public async signIn(req: express.Request, res: express.Response): Promise<any> {
        const body = req.body;

        const id = await pool.query('SELECT * FROM alumnos WHERE idAlumno = ?', [body.idAlumno]);
        if (id.length > 0) {
            const contra = await pool.query('SELECT * FROM alumnos WHERE contra = ?', [body.contra]);
                if(contra.length != 0){
                    res.json({info: 'ingreso'});
                    console.log('feli');
                }
        }
        res.status(404).json({ text: "Carnet o Contraseña incorrectos" });
    }

    //Ver Mi Perfil
    public async miPerfil(req: express.Request, res: express.Response): Promise<any> {
        const { idAlumno } = req.params;
        const alumno = await pool.query('SELECT * FROM alumnos WHERE idAlumno = ?', [idAlumno]);
        return res.json(alumno);
    }

}

export const indexController = new IndexController();