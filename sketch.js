function setup() {
  createCanvas(600, 400);
  somTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();

  //movimentos
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  
  verificaColisao();
  incluiPontos();
  marcaPonto();
}




