const avanca = document.querySelectorAll('.btn-proximo')

avanca.forEach(button >{
    button.addEventListener('clicl',function(){
const atual = document.querySelector('.ativo');
   const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

atual.classList.remove('ativo');
document.getElementById(proximoPassomoPasso).classList.add('ativo');
      })
})