function area(largura, altura){

    const area = largura * altura;

    if(area > 20){
        console.log(`Valor acima do permitido ${area}m²`);
    }
    else{
        return area;
    }
}

area(2,5);

area(8);

area(4,7,6,2);

area(5,8);