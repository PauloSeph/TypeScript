import Carro from "./Carro";
import {Concessionaria } from "./Concessionaria";
import {Pessoa } from "./Pessoa";



// Criar Carros

let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)


// Montar a lista de carros da concessionaria
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

// Exibir a lista de carros

// console.log(concessionaria.mostrarListaDeCarros())


// Comprar o Carro
let cliente = new Pessoa('João', 'Veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())