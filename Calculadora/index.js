
let n1 = 0;
let n2 = 0;

const calculadora = function(calculadora) {

     n1 = parseInt(prompt("Digite o primeiro numero:"))
     n2 = parseInt(prompt("Digite o segundo numero:"))

    return calculadora;
    
    };
 
    
do{   

const sinal = window.prompt("Digite um dos sinais para realizar a operação: soma +, subtração -, multiplicação *, divisão real /, divisão inteira %, potenciação ** ");
calculadora();

   switch (sinal) {

        case "+":
        window.alert(`A soma de ${n1} e ${n2} é igual ${n1+n2}!!`);
        break;

        case "-":
        window.alert(`A subtração de ${n1} com ${n2} é igual ${n1-n2}!!`);
        break;

        case "*":
        window.alert(`A multiplicação de  ${n1} por ${n2} é igual ${n1*n2}!!`);
        break;

        case "/":
        window.alert(`A divisão real entre ${n1} e ${n2} é igual ${n1/n2}!!`);
        break;

        case "%":
        window.alert(`A divisão inteira entre ${n1} e ${n2} é igual ${1%n2}!!`);
        break;

        case "**":
        window.alert(`A exponenciação de ${n1} e ${n2} é igual ${n1**n2}!!`);
        break;
   
    default: alert("Digite o operador correspondente a operação desejada!!")
        break;
   };
        
        

}while(0<1);