var t_fieldNome=document.querySelector("#nome"); // Estou pegando pelo ID
console.log(t_fieldNome)

var t_fieldData=document.querySelector("#data_nasc");
console.log(t_fieldData)

var t_fieldAltura=document.querySelector("#altura");
console.log(t_fieldAltura)

var t_fieldPeso=document.querySelector("#peso");
console.log(t_fieldPeso)

var btnCalcular=document.querySelector("#calcular");
console.log(btnCalcular)


//Funções

function somar(n1,n2){

    return n1+n2


}

console.log(somar(23,45))

// Quando eu clicar no botão ele vai somar os valores e vai imprimir no console.log

//Estou pedindo para add um evento de clique no botão
btnCalcular.addEventListener("click", function soma(e){
    console.log(`Nome: ${t_fieldNome.value} peso: ${t_fieldPeso.value} Altura: ${t_fieldAltura.value}
    DataNascimento: ${t_fieldData.value}`)



})