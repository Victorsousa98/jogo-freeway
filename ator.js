var yAtor = 366;
var xAtor = 300;
var colisao = false;
var pontos = 0;
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
  
};

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3
  } 
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3
    }
  }  
};

function verificaColisao(){
  for( var i = 0; i < imagemCarros.length; i++)
    {
      colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15);
      
    if(colisao){
      somColisao.play()
      voltaAtorParaPosicaoInicial();
      if (pontosMaiorQueZero()){
        pontos--
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366
};

function incluiPontos(){
  textSize(30)
  textAlign(CENTER)
  fill('Yellow')
  text(pontos, width /4 , 30)
}

function marcaPonto(){
  if(yAtor == 15){
    pontos++;
    voltaAtorParaPosicaoInicial()  
    somPonto.play()
  }
}

function pontosMaiorQueZero(){
  return pontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}