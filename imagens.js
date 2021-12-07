

var imagemDaEstrada;
var imagemDoAtor;


var imagemCarror1;
var imagemCarro2;
var imagemCarro3;

//sons
var somTrilha;
var somColisao;
var somPonto;

function preload(){
  imagemDaEstrada = loadImage('imagens/estrada.png')
  imagemDoAtor = loadImage('imagens/ator-1.png')
  imagemCarro1 = loadImage('imagens/carro-1.png')
  imagemCarro2 = loadImage('imagens/carro-2.png')
  imagemCarro3 = loadImage('imagens/carro-3.png')
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  
  somTrilha = loadSound('trilha.mp3')
  somColisao = loadSound('colidiu.mp3')
  somPonto = loadSound ('pontos.wav')
  
}