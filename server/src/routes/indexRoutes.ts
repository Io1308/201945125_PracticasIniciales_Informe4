import express, { Router } from 'express';

import {indexController} from '../controllers/indexController'

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/', indexController.index);
        this.router.post('/signin', indexController.signIn);
        this.router.put('/signup', indexController.signUp);
        this.router.post('/recuperar', indexController.recuperar);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;