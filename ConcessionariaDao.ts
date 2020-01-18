import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria):boolean {
        console.log('Logica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('Logica Update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('Logica delete')
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria {
        console.log('Logica selecionar')
        return new Concessionaria ('', [])
    }

    selecionarTodos(): [any] {
        console.log('Logica selecionar todos')
        return [new Concessionaria('', [])]
    }
}