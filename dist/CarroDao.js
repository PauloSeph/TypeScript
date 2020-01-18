"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('Logica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('Logica Update');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('Logica delete');
        return new Carro_1.default('', 3);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('Logica selecionar');
        return new Carro_1.default('', 3);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('Logica selecionar todos');
        return [new Carro_1.default('', 3)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
