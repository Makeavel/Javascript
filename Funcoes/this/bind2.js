function pessoa(){

    this.idade = 0;
    const self = this;

    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/ ,1000) // esse 1000 é a qtd de MSegundos do delay entre os disparos da função
}        //se tentar usar this.idade não funciona, tem que declarar só this

new pessoa