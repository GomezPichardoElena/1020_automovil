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
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu2 = exports.menu = void 0;
const entradaTeclado_1 = require("../views/entradaTeclado");
exports.menu = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    console.log('\n');
    console.log('1.- INTRODUCIR UN VEHICULO NUEVO');
    console.log('2.- VER LISTA DE VEHICULOS');
    console.log('3.- BORRAR VEHICULO');
    console.log('4.- ELEGIR VEHICULO PARA MODIFICAR');
    console.log('0.- SALIR');
    n = parseInt(yield entradaTeclado_1.leerTeclado('SELECCIONE UNO: '));
    return n;
});
exports.menu2 = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    console.log('\n');
    console.log('1.- VER VEHICULO ELEGIDO');
    console.log('2.- ARRANCAR/APAGAR VEHICULO');
    console.log('3.- CAMBIAR VELOCIDAD VEHICULO');
    console.log('4.- CALCULAR CONSUMO VEHICULO');
    console.log('5.- PONER GASOLINA');
    console.log('0.- SALIR');
    n = parseInt(yield entradaTeclado_1.leerTeclado('SELECCIONE UNO: '));
    return n;
});
