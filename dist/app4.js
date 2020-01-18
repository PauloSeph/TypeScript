"use strict";
// import {ConcessionariaDao} from './ConcessionariaDao'
// import {PessoaDao} from './PessoaDao'
// import {CarroDao} from './CarroDao'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
var carro = new Carro_1.default('', 3);
var dao = new Dao_1.Dao();
var dao1 = new Dao_1.Dao();
var dao2 = new Dao_1.Dao();
dao.inserir(concessionaria);
dao1.atualizar(pessoa);
dao2.remover(4);
// Concessionaria
// let dao: ConcessionariaDao = new ConcessionariaDao()
// Pessoa
// let daopessoa: PessoaDao = new PessoaDao()
// Carro
// let daocarro: CarroDao = new CarroDao()
