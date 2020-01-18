import {DaoInterface} from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa):boolean {
        console.log('Logica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('Logica Update')
        return true
    }

    remover(id: number): Pessoa {
        console.log('Logica delete')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('Logica selecionar')
        return new Pessoa ('', '')
    }

    selecionarTodos(): [any] {
        console.log('Logica selecionar todos')
        return [new Pessoa('', '')]
    }
}