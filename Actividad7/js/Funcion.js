var operandoa;
var operandob;
var operacion;

function init(){
    document.getElementById('igual').onclick=igual;
    document.getElementById('reset').onclick=limpiar;
    document.getElementById('suma').onclick=sumar;
    document.getElementById('resta').onclick=resetear;
    document.getElementById('multiplicacion').onclick=multiplicacion;
    document.getElementById('division').onclick=division;
    document.getElementById('cero').onclick=cero;
    document.getElementById('uno').onclick=ponerUno;
    document.getElementById('dos').onclick=ponerDos;
    document.getElementById('tres').onclick=ponerTres;
    document.getElementById('cuatro').onclick=ponerCuatro;
    document.getElementById('cinco').onclick=ponerCinco;
    document.getElementById('seis').onclick=ponerSeis;
    document.getElementById('siete').onclick=ponerSiete;
    document.getElementById('ocho').onclick=ponerOcho;
    document.getElementById('nueve').onclick=ponerNueve;

function cero(){
    resultado.textContent = resultado.textContent+"0";
}    

function ponerUno(){
    resultado.textContent = resultado.textContent+"1";
}

function ponerDos(){
    resultado.textContent = resultado.textContent+"2";
}

function ponerTres(){
    resultado.textContent = resultado.textContent+"3";
}

function ponerCuatro(){
    resultado.textContent = resultado.textContent+"4";
}

function ponerCinco(){
    resultado.textContent = resultado.textContent+"5";
}

function ponerSeis(){
    resultado.textContent = resultado.textContent+"6";
}

function ponerSiete(){
    resultado.textContent = resultado.textContent+"7";
}

function ponerOcho(){
    resultado.textContent = resultado.textContent+"8";
}

function ponerNueve(){
    resultado.textContent = resultado.textContent+"9";
}
function reset(){
    limpiar();
}
function sumar(){
    operandoa=resultado.textContent;
    operacion='+';
    limpiar();
}
function restar(){
    operandoa=resultado.textContent;
    operacion='-';
    limpiar();
}
function multiplicacion(){
    operandoa=resultado.textContent;
    operacion='*';
    limpiar();
}
function division(){
    operandoa=resultado.textContent;
    operacion='/';
    limpiar();
}
function igual(){
    operandob=resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent="";
}
function resetear(){
    resultado.textContent="";
    operandoa=0;
    operandob=0;
    operacion="";
}

function resolver(){
    res=0;
    switch(operacion){
        case "+":
            res=parseFloat(operandoa)+parseFloat(operandob);
            break;
        case "-":
            res=parseFloat(operandoa)-parseFloat(operandob);
            break;
        case "*":
            res=parseFloat(operandoa)*parseFloat(operandob);
            break;
        case "/":
            res=parseFloat(operandoa)/parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent=res;
}
}