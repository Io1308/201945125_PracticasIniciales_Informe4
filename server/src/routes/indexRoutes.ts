import express, { Router } from 'express';

import {indexController} from '../controllers/indexController'

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/api/signin', indexController.signIn);
        this.router.put('/api/signup', indexController.signUp);
        this.router.get('/api/miperfil/:idAlumno', indexController.miPerfil);
        this.router.post('/api/recuperar/', indexController.recuperar);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;