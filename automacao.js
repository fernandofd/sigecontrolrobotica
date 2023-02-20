let botaoled1 = document.querySelector('.botaoL1');
let led1 = document.querySelector('.led1');
botaoled1.addEventListener('click',  function() {
  if(botaoled1.value=="Ligar D8"){
    botaoled1.setAttribute("value","Desligar D8")
    botaoled1.setAttribute("class","botaoL1 ledligado")
    led1.setAttribute("src","./ledvermelho.png")
  }else{
    botaoled1.setAttribute("value","Ligar D8")
    botaoled1.setAttribute("class","botaoL1 leddesligado")
    led1.setAttribute("src","./ledapagado.png")
  }
});

let botaoled2 = document.querySelector('.botaoL2');
let led2 = document.querySelector('.led2');
botaoled2.addEventListener('click',  function() {
  if(botaoled2.value=="Ligar D9"){
    botaoled2.setAttribute("value","Desligar D9")
    botaoled2.setAttribute("class","botaoL2 ledligado")
    led2.setAttribute("src","./ledverde.png")
  }else{
    botaoled2.setAttribute("value","Ligar D9")
    botaoled2.setAttribute("class","botaoL2 leddesligado")
    led2.setAttribute("src","./ledapagado.png")
  }
});

let botaoled3 = document.querySelector('.botaoL3');
let led3 = document.querySelector('.led3');
botaoled3.addEventListener('click',  function() {
  if(botaoled3.value=="Ligar D10"){
    botaoled3.setAttribute("value","Desligar D10")
    botaoled3.setAttribute("class","botaoL3 ledligado")
    led3.setAttribute("src","./ledazul.png")
  }else{
    botaoled3.setAttribute("value","Ligar D10")
    botaoled3.setAttribute("class","botaoL3 leddesligado")
    led3.setAttribute("src","./ledapagado.png")
  }
});


let botaoled4= document.querySelector('.botaoL4');
let led4= document.querySelector('.led4');
botaoled4.addEventListener('click',  function() {
  if(botaoled4.value=="Ligar D11"){
    botaoled4.setAttribute("value","Desligar D11")
    botaoled4.setAttribute("class","botaoL4 ledligado")
    led4.setAttribute("src","./ledvermelho.png")
  }else{
    botaoled4.setAttribute("value","Ligar D11")
    botaoled4.setAttribute("class","botaoL4 leddesligado")
    led4.setAttribute("src","./ledapagado.png")
  }
});

let botaoled5 = document.querySelector('.botaoL5');
let led5 = document.querySelector('.led5');
botaoled5.addEventListener('click',  function() {
  if(botaoled5.value=="Ligar D12"){
    botaoled5.setAttribute("value","Desligar D12")
    botaoled5.setAttribute("class","botaoL5 ledligado")
    led5.setAttribute("src","./ledverde.png")
  }else{
    botaoled5.setAttribute("value","Ligar D12")
    botaoled5.setAttribute("class","botaoL5 leddesligado")
    led5.setAttribute("src","./ledapagado.png")
  }
});

let botaoled6 = document.querySelector('.botaoL6');
let led6 = document.querySelector('.led6');
botaoled6.addEventListener('click',  function() {
  if(botaoled6.value=="Ligar D13"){
    botaoled6.setAttribute("value","Desligar D13")
    botaoled6.setAttribute("class","botaoL6 ledligado")
    led6.setAttribute("src","./ledazul.png")
  }else{
    botaoled6.setAttribute("value","Ligar D13")
    botaoled6.setAttribute("class","botaoL6 leddesligado")
    led6.setAttribute("src","./ledapagado.png")
  }
});






let botaoteste1 = document.querySelector('.testebotao1');
let divteste1 = document.querySelector('.botaoteste1');
botaoteste1.addEventListener('click',  function() {
  if(botaoteste1.value=="D2 Desligado"){
    botaoteste1.setAttribute("value","D2 Ligado")
    divteste1.setAttribute("class","botaoLigado botaoteste1")
    divteste1.innerHTML='<h3> Botão D2 está Up</h3>'
  }else{
    botaoteste1.setAttribute("value","D2 Desligado")
    divteste1.setAttribute("class","botaoDesligado botaoteste1")
    divteste1.innerHTML='<h3> Botão D2 está Low</h3>'
  }
});

let botaoteste2 = document.querySelector('.testebotao2');
let divteste2 = document.querySelector('.botaoteste2');
botaoteste2.addEventListener('click',  function() {
  if(botaoteste2.value=="D3 Desligado"){
    botaoteste2.setAttribute("value","D3 Ligado")
    divteste2.setAttribute("class","botaoLigado botaoteste2")
    divteste2.innerHTML='<h3> Botão D3 está Up</h3>'
  }else{
    botaoteste2.setAttribute("value","D3 Desligado")
    divteste2.setAttribute("class","botaoDesligado botaoteste2")
    divteste2.innerHTML='<h3> Botão D3 está Low</h3>'
  }
});







let range1 = document.querySelector('.angulo1');
let rangeValue1 = document.querySelector('#range-value1');
rangeValue1.innerHTML= `<h3 id="range-value1">Valor: ${range1.value}</h3>`;
range1.addEventListener('input', function() {
  rangeValue1.innerHTML= `<h3 id="range-value1">Valor: ${range1.value}</h3>`;
});


let range2 = document.querySelector('.angulo2');
let rangeValue2 = document.querySelector('#range-value2');
rangeValue2.innerHTML= `<h3 id="range-value2">Valor: ${range2.value}</h3>`;
range2.addEventListener('input', function() {
  rangeValue2.innerHTML= `<h3 id="range-value2">Valor: ${range2.value}</h3>`;
});

let range3 = document.querySelector('.angulo3');
let rangeValue3 = document.querySelector('#range-value3');
rangeValue3.innerHTML= `<h3 id="range-value3">Valor: ${range3.value}</h3>`;
range3.addEventListener('input', function() {
  rangeValue3.innerHTML= `<h3 id="range-value3">Valor: ${range3.value}</h3>`;
});

let range4 = document.querySelector('.angulo4');
let rangeValue4 = document.querySelector('#range-value4');
rangeValue4.innerHTML= `<h3 id="range-value4">Valor: ${range4.value}</h3>`;
range4.addEventListener('input', function() {
  rangeValue4.innerHTML= `<h3 id="range-value4">(D7) Valor: ${range4.value}</h3>`;
});


let analogica0=document.querySelector('div.Analogica0');
analogica0.innerHTML=`<h2>Valor (A0) Sensor de Luz = 523 </h2>`;

let analogica1=document.querySelector('div.Analogica1');
analogica1.innerHTML=`<h2>Valor (A1) Potenciômetro 01 = 1023 </h2>`;

let analogica2=document.querySelector('div.Analogica2');
analogica2.innerHTML=`<h2>Valor (A2) Potenciômetro 02 = 1023</h2>`;

let analogica3=document.querySelector('div.Analogica3');
analogica3.innerHTML=`<h2>Valor (A3) Temperatura =254 </h2>`;

let analogica4=document.querySelector('div.Analogica4');
analogica4.innerHTML=`<h2>Valor (A4)  Livre 01 = 1023 </h2>`;

let analogica5=document.querySelector('div.Analogica5');
analogica5.innerHTML=`<h2>Valor (A5)  Livre 0 = 1023 </h2>`;





