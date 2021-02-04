
// Try Catch e throw


function imprimeNomeGritado(obj){

    try{ // tenta executar o código dentro, se der erro executa o catch
        console.log(obj.nome.toUpperCase() + "!!!");
    } catch(erro){ // no catch pode mandar fazer qualquer coisa, aqui mandei para outra function
        trataErroLanca(erro);
    } finally { // independente de entrar no try ou no catch ele roda o finally
        console.log("Fim de execução");
    }

};

function trataErroLanca(erro){ // aqui to tratando a "mensagem" de erro, posso fazer qualquer coisa aqui
    throw new Error('Error 404 sqn'); //throw -> significa lançar (mostrar comando a seguir)
    //throw 100  
    //throw true
    //throw 'mensagem'
    /*throw {
        nome: erro.name,
        msg erro.mensagem,
        date : new Date,
    } */
}

const obj = { 
    nome : 'Makeavel',
};

imprimeNomeGritado(obj);
