const pessoa = {
    
    saudacao : "Bom dia!",
    falar(){
        console.log(this.saudacao); // se tirar o this não compila
    }                               // o this é que permite o acesso.
}

pessoa.falar();

const falar = pessoa.falar; // não funciona, undefined, tá errado, ai entra do bind

const falarPessoa = pessoa.falar.bind(pessoa);

falarPessoa();

const pessoal = {

    nome : "Laura",
    idade : "26",
    endereco : "Lago Norte",

    externar(){
        console.log(this.nome);
    }

}

const oi = pessoal.externar.bind(pessoal);

oi()