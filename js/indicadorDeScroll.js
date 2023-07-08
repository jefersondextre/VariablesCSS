// identificar el scroll maximo

// altura maxima del scroll del navegador
const h1 = document.documentElement.scrollHeight
console.log(h1,'Altura maxima');
// altura de la pantalla
const h2 = document.documentElement.clientHeight
console.log(h2, "Altura pantalla");

// 1717
console.log(h1 - h2);
const scrollUnit = (h1-h2)/100
console.log(scrollUnit,"Diferencia de alturas");
const rootStyles = document.documentElement.style


addEventListener('scroll',()=>{

  rootStyles.setProperty('--width', `${Math.round(scrollY/scrollUnit)}`);
  console.log(Math.round(scrollY/scrollUnit));
})

// Comprobamos que vemos que el scrollY es el valor

