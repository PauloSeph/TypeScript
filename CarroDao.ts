import {DaoInterface} from './DaoInterface'
import Carro from './Carro'

export class CarroDao implements DaoInterface {
    nomeTabela: string = 'tb_carro'

    inserir(object: Carro):boolean {
        console.log('Logica de insert')
        return true
    }

    atualizar(object: Carro): boolean {
        console.log('Logica Update')
        return true
    }
    remover(id: number): Carro {
        console.log('Logica delete')
        return new Carro('', 3)
    }
    selecionar(id: number): Carro {
        console.log('Logica selecionar')
        return new Carro ('', 3)
    }

    selecionarTodos(): [any] {
        console.log('Logica selecionar todos')
        return [new Carro('', 3)]
    }
}