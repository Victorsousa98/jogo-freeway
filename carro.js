//código do carro

var yCarros = [40, 96, 150, 210, 270, 318];
var xCarros = [600, 700, 650, 750, 725, 625];
var velocidadeCarros = [3, 4, 5, 7, 3, 2];
var larguraCarro = 50
var alturaCarro = 40



function mostraCarro(){
  for(var i = 0; i < imagemCarros.length; i++ ){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro)
  }
}

function movimentaCarro(){
  for(i = 0; i < xCarros.length && velocidadeCarros.length; i++ ){
    xCarros[i] -= velocidadeCarros[i]
  }  
}

function voltaPosicaoInicialDoCarro(){
  for(i = 0; i < xCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50 
}