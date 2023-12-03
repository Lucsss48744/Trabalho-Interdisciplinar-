function calcular(){
    //Pegando os numeros A, B e C
    var a = parseFloat(document.getElementById("valorA").value)
    var b = parseFloat(document.getElementById("valorB").value)
    var c = parseFloat(document.getElementById("valorC").value)
    
    //verficando se são iguais a zero.
    if(a === 0){
        document.getElementById("result").innerHTML = "Esta é uma equação do primeiro grau"
    }
    else if (b === 0){
        document.getElementById("result").innerHTML = "Esta é uma equação do segundo grau incompleta"
    }
    else if (c === 0 ){
        document.getElementById("result").innerHTML = "Esta é uma equação do segundo grau incompleta"
    }
    else{ // calculando o delta 
        var delta = b * b - 4 * a * c

        if (delta < 0) { //verificando se o delta é menor que zero
            document.getElementById("result").innerHTML = "Ɇ Raiz Real";
          }
          else if (delta > 0) {// caso o delta for maior que zero terá o calculo das raizes 
        
            var r1 = (-b + Math.sqrt(delta)) / (2 * a);
            var r2 = (-b - Math.sqrt(delta)) / (2 * a);
      
            document.getElementById("result").innerHTML = "As raízes são: r1 = " + r1.toFixed(2) + ", r2 = " + r2.toFixed(2);
          }
          else {
        //caso o delta for igual a zero 
            var r = -b / (2 * a);
            document.getElementById("result").innerHTML = "A equação possui uma raiz dupla: x = " + r.toFixed(2);
          }
    }
}
