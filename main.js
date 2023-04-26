const numeroSecreto = Math.trunc(Math.random() * 20) + 1;
const again = document.querySelector('.again');
const check = document.querySelector('.check');

check.addEventListener('click', function(){
    if(Number(document.querySelector('#input-num').value) === numeroSecreto){
        document.querySelector('#label').innerHTML = 'Parabens, voce acertou o numero';
        document.querySelector('.pontuacao-alta').innerHTML = document.querySelector('.pnt-partida').innerHTML;
    
    } else if(Number(document.querySelector('#input-num').value) > numeroSecreto) {
        document.querySelector('#label').innerHTML = 'Tente novamente, o numero esta muito alto';
        document.querySelector('.pnt-partida').innerHTML = Number(document.querySelector('.pnt-partida').innerHTML) - 1;
    
    } else if(Number(document.querySelector('#input-num').value) < numeroSecreto){
        document.querySelector('#label').innerHTML = 'Tente novamente, o numero esta abaixo do numero secreto';
        document.querySelector('.pnt-partida').innerHTML = Number(document.querySelector('.pnt-partida').innerHTML) - 1;
    }
});

again.addEventListener('click', function(){
    document.querySelector('#label').innerHTML = 'Escolha um Numero de 1 a 20!';
    document.querySelector('.pontuacao-alta').innerHTML = 0;
    document.querySelector('.pnt-partida').innerHTML = 20;
})