
const key = "6a966e7a5bee6ee9c5c8bf58b35efa78"

//funções

function colocardadosnatela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name 
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)  + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " +  dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
    document.querySelector(".bandeira").src = `https://flagsapi.com/${dados.sys.country}/shiny/64.png`
    document.querySelector(".vento").innerHTML = "Velocidade do Vento: " + Math.floor(dados.wind.speed) + " Km/h"
    
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
 
    
    colocardadosnatela(dados)
}



function cliqueinobotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}