class Brinquedos {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

const carrinho = new Brinquedos ('velocito', 10);
const slime = new Brinquedos('geleca', 15);

let listBrinquedos = [carrinho, slime]
desconto = 0.2

let promoBrinquedos = listBrinquedos.map((el) => {
    
    return {...el, preco: el.preco - (el.preco * desconto)}
})

console.table(promoBrinquedos);