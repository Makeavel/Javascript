const prod1 = {}
prod1.nome = "Laura Coelho";
prod1.preco = 800.00;
prod1['Desconto Legal'] = 0.40; 

console.log(prod1);

// isso NÃO É um JSON 
const prod2 = {
    nome : "Laura",
    preco : 788.30
}

// isso É um JSON
'{  "nome": "laura" ,"preco" : 899.00 }'

console.log(prod2);