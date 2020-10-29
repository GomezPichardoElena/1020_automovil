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
const automovil_1 = require("./clases/automovil");
const menu_1 = require("./views/menu");
const entradaTeclado_1 = require("./views/entradaTeclado");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    //creamos un array para almacenar los coches que se vayan creando y le pasamos la clase de automovil
    let coches = new Array();
    let n;
    do {
        n = yield menu_1.menu();
        switch (n) {
            case 1: //crear un nuevo vehiculo, para poder almacenar varios necesitamos algo que los identifique ya sea un numero o la matricula
                console.log('Ha seleccionado crear un nuevo vehiculo');
                let identificador, consumo, gasolina;
                //aqui realizamos un try catch para comprobar que el identificador que se ha introducido no existe y si existe reportar el error al usuario
                try {
                    identificador = parseInt(yield entradaTeclado_1.leerTeclado('Por favor introduzca un identificador para el vehiculo'));
                    //usamos parseFloat en lugar de parseInt para el consumo, para poder introducir decimales 
                    consumo = parseFloat(yield entradaTeclado_1.leerTeclado('Introduzca el consumo del vehiculo por cada 100km'));
                    gasolina = parseFloat(yield entradaTeclado_1.leerTeclado('Introduzca la cantidad de gasolina que tienee l coche'));
                    let coche = new automovil_1.Automovil(identificador, consumo, gasolina);
                    let existe = false;
                    coches.forEach(Coche => {
                        if (coche.Identificador == Coche.Identificador) {
                            existe = true;
                        }
                    });
                    if (existe) {
                        console.log('El vehiculo introducido ya existe, por favor introduzca un vehiculo nuevo');
                    }
                    else {
                        coches.push(coche);
                    }
                }
                catch (error) {
                    console.log(error);
                }
                break;
            case 2: // ver lista de vehiculos
                if (coches.length == 0) {
                    console.log('No existen vehiculos creados, por favor vaya a la opcion 1 y cree un vehiculo');
                }
                else {
                    console.log('Ha seleccionado mostrar la lista de vehiculos');
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`);
                    });
                }
                break;
            case 3: //eliminar vehiculo
                //primero comprobamos que ya se haya creado algun vehiculo en caso negativo reportamos el error al usuario
                console.log('Ha seleccionado eliminar un vehiculo');
                if (coches.length == 0) {
                    console.log('No existen vehiculos creados, por favor vaya a la opcion 1 y cree un vehiculo');
                }
                else { //en caso de que existan vehiculos creados le pedimos que seleccione el que desea eliminar
                    console.log('Estos son los vehiculos creados');
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`);
                    });
                    let ide1;
                    ide1 = parseInt(yield entradaTeclado_1.leerTeclado('Por favor introduzca el identificador del vehiculo que desea eliminar'));
                    let existe = false;
                    let index = 0;
                    //por cada coche cuyo identificador coincida con el que se desea eliminar quitarlo de la lista
                    coches.forEach(Coche => {
                        if (ide1 == Coche.Identificador) {
                            index = coches.indexOf(Coche);
                            existe = true;
                        }
                    });
                    if (existe) {
                        coches.splice(index, 1);
                    }
                    else {
                        console.log('No existe el vehiculo que desea eliminar, por favor introduzca un vehiculo existente');
                    }
                }
                break;
            case 4: //elegir un coche para modificar los datos
                if (coches.length == 0) {
                    console.log('No existen vehiculos creados, porfavor vaya a la opcion 1 y cree un vehiculo ');
                }
                else {
                    let ide;
                    console.log('Por favor, seleccione el identificador de un vehiculo para modificarlo');
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`);
                    });
                    ide = parseInt(yield entradaTeclado_1.leerTeclado('Introduzca el identificador del vehivulo'));
                    let index = -1;
                    coches.forEach(Coche => {
                        if (Coche.Identificador == ide) {
                            index = coches.indexOf(Coche);
                        }
                    });
                    //cuando seleccione la opcion de modificar un vehiculo pasamos al menu 2
                    if (index != -1) {
                        let n2;
                        let sCoche = coches[index];
                        do {
                            n2 = yield menu_1.menu2();
                            switch (n2) {
                                case 1: // ver vehiculo elegido
                                    console.log('Mostrando el vehiculo elegido');
                                    console.log(sCoche.imprimir());
                                    break;
                                case 2: //arrancar o parar el coche
                                    if (sCoche.Encendido) {
                                        try {
                                            sCoche.cArrancado();
                                            console.log('Apagando vehiculo');
                                        }
                                        catch (error) {
                                            console.log(error);
                                        }
                                    }
                                    else {
                                        console.log('Arrancando vehiculo');
                                        sCoche.cArrancado();
                                    }
                                    break;
                                case 3: // cambiar la velocidad del coche
                                    let vel;
                                    vel = parseInt(yield entradaTeclado_1.leerTeclado("Ha seleccionado cambiar la velocidad del vehiculo, por favor, introduzca la nueva velocidad del vehículo"));
                                    try {
                                        sCoche.Velocidad = vel;
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                    break;
                                case 4: //calcular el consumo del coche
                                    let tiempo;
                                    try {
                                        tiempo = parseInt(yield entradaTeclado_1.leerTeclado("Introduzca el tiempo en horas que lleva el vehiculo a la velocidad actual, para calcular el consumo"));
                                        console.log(`El vehiculo ha consumido ${sCoche.consumido(tiempo)} litros de gasolina`);
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                    break;
                                case 5: //poner gasolina
                                    let cantidad;
                                    cantidad = parseFloat(yield entradaTeclado_1.leerTeclado('Ha seleccionado poner gasolina, por favor introduzca la cantidad de gasolina del vehiculo'));
                                    sCoche.Gasolina = cantidad;
                                    break;
                                case 0:
                                    console.log('\nVolviendo al menu principal');
                                    break;
                                default:
                                    console.log("Opción incorrecta");
                                    break;
                            }
                        } while (n2 != 0);
                    }
                    else {
                        console.log('Este vehiculo no existe');
                    }
                }
                break;
            case 0:
                console.log('\nSaliendo');
                break;
            default:
                console.log("Opción incorrecta");
                break;
        }
    } while (n != 0);
});
main();
