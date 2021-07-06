 const target = document.querySelectorAll('[data-anime]');

 const animationClass = "animate";
 const tamanhoTela = window.innerHeight;
 const larguraTela = window.innerWidth;


 const debounce = function(func, wait, immediate) {
     let timeout;
     return function(...args) {
         const context = this;
         const later = function() {
             timeout = null;
             if (!immediate) func.apply(context, args);
         };
         const callNow = immediate && !timeout;
         clearTimeout(timeout);
         timeout = setTimeout(later, wait);
         if (callNow) func.apply(context, args);
     };
 };

 function animeScroll() {
     const windowTop = window.pageYOffset;
     const tamanhoTela = window.innerHeight;
     const posicaoAnimacao = (windowTop + (tamanhoTela * 3 / 4));

     target.forEach((elemento) => {

         if (posicaoAnimacao > elemento.offsetTop) {
             elemento.classList.add(animationClass);
         } else {
             elemento.classList.remove(animationClass);
         }


     })
 }

 if (target.length) {

     window.addEventListener("scroll", debounce(() => {
         animeScroll();
         console.log("fudeu");
     }), 300);
 }