let comparaThis = function (parametro){
    console.log(this === parametro);
};

const objto = {}

comparaThis = comparaThis.bind(obj);
comparaThis(global); // váriavel global...
comparaThis(objto);

let comparaThisArrow = para => console.log(this === para);
comparaThisArrow(global);
comparaThisArrow(module.exports);

comparaThisArrow = comparaThisArrow.bind(objto);
comparaThisArrow(objto);


