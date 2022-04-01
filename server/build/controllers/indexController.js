"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const database_1 = __importDefault(require("../database"));
class IndexController {
    //Crear Alumno
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const result = yield database_1.default.query('INSERT INTO alumnos set ?', [req.body]);
            res.json({ message: 'Alumno Creado' });
        });
    }
    //Recuperar Contraseña
    recuperar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const id = yield database_1.default.query('SELECT * FROM alumnos WHERE idAlumno = ?', [body.idAlumno]);
            if (id.length > 0) {
                const email = yield database_1.default.query('SELECT * FROM alumnos WHERE email = ?', [body.email]);
                if (email.length != 0) {
                    yield database_1.default.query('UPDATE alumnos set contraseña = ? WHERE email = ?', [body.contraseña, body.email]);
                    res.json({ info: 'contraseña recuperada' });
                    console.log('contraseña recuperada');
                }
            }
            res.status(404).json({ text: "Carnet o Email incorrectos" });
            console.log('F');
        });
    }
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const id = yield database_1.default.query('SELECT * FROM alumnos WHERE idAlumno = ?', [body.idAlumno]);
            if (id.length > 0) {
                const contra = yield database_1.default.query('SELECT * FROM alumnos WHERE contraseña = ?', [body.contraseña]);
                if (contra.length != 0) {
                    res.json({ info: 'ingreso' });
                    console.log('feli');
                }
            }
            res.status(404).json({ text: "Carnet o Contraseña incorrectos" });
        });
    }
}
exports.indexController = new IndexController();
