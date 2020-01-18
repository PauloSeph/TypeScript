// import {ConcessionariaDao} from './ConcessionariaDao'
// import {PessoaDao} from './PessoaDao'
// import {CarroDao} from './CarroDao'

import {Dao} from './Dao'

import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import Carro from './Carro'



let concessionaria = new Concessionaria('',[])
let pessoa = new Pessoa('', '')
let carro = new Carro ('', 3)

let dao: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao1: Dao<Pessoa> = new Dao<Pessoa>()
let dao2: Dao<Carro> = new Dao<Carro>()



dao.inserir(concessionaria)
dao1.atualizar(pessoa)
dao2.remover(4)

// Concessionaria
// let dao: ConcessionariaDao = new ConcessionariaDao()

// Pessoa
// let daopessoa: PessoaDao = new PessoaDao()

// Carro
// let daocarro: CarroDao = new CarroDao()




