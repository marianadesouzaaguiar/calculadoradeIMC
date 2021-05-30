let botaoCalcular = document.getElementById("btnCalcular");

botaoCalcular.addEventListener("click", calculandoIMC);

function calculandoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value/100;
    let resultado = document.getElementById("resultado");
    
    let mensagem = "";

    if (peso !== "" && altura !== ""){
        let imc = (peso/(altura*altura)).toFixed(1);


        if (imc < 18.5){
            mensagem = "Abaixo do peso!!"
        }else if (imc < 25) {
            mensagem = "Você está com o peso ideal!"
        }else if (imc < 30){
            mensagem = "Você está levemente acima do peso!"
        }else if (imc < 35){
            mensagem = "Obesidade grau I!"
        }else if (imc < 40){
            mensagem = "Obesidade grau II!"
        }else {
            mensagem = "Obesidade grau III!"
        }
       
        resultado.textContent = `Seu IMC é ${imc}!! ${mensagem}`;
    }else {
        resultado.textContent = "Preencha todos os campos solicitados!"
    }


    
    
    

    


    

}
