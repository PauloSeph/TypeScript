import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''

    inserir(object: T):boolean {
        console.log('Logica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('Logica Update')
        return true
    }
    remover(id: number): T {
        console.log('Logica delete')
        return Object()
    }
    selecionar(id: number): T {
        console.log('Logica selecionar')
        return Object()
    }

    selecionarTodos(): [T] {
        console.log('Logica selecionar todos')
        return Object()
    }
}