"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/api/signin', indexController_1.indexController.signIn);
        this.router.put('/api/signup', indexController_1.indexController.signUp);
        this.router.get('/api/miperfil/:idAlumno', indexController_1.indexController.miPerfil);
        this.router.post('/api/recuperar/', indexController_1.indexController.recuperar);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
