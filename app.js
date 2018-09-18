const image = document.getElementById('mainImage');
const btnNext = document.getElementById('next');
const link = document.getElementById('link');
const info = document.getElementById('info')
const infotext = document.getElementById('text');
const namedescription = document.getElementById('namedescription');
const arrayimg = ['css/img/foodmap.PNG', 'css/img/redSocial.PNG', 'css/img/cifher.PNG'];
const arraylink = ['https://angelicanoriega.github.io/lim-2018-01-foodmap/src/restaurant.html', 'https://angelicanoriega.github.io/lim-2018-05-bc-core-pm-socialnetwork/src/', 'https://angelicanoriega.github.io/lim-2018-05-bc-core-pm-cipher/src'];
const arrayinfotext = ['Pagina web de busqueda y registro de restaurantes', 'Red social con tematica de comida saludable', 'Pagina web en la que puedes codificar y descodificar los mensajes que crees.'];
const arraynamedesc = ['Foodmap', 'It´s Food', 'Cipher'];
let acum = 1;
// Galeria de proyectos
btnNext.addEventListener('click', () => {
    image.setAttribute('src', arrayimg[acum]);
    image.setAttribute('alt', arrayimg[acum]);
    link.setAttribute('href', arraylink[acum]);
    namedescription.setAttribute('value', arraynamedesc[acum]);
    infotext.innerHTML = arrayinfotext[acum];
    acum++
    if (acum > 2) {
        acum = 0;
    }
});
// informacion de proyectos
namedescription.addEventListener('click', () => {
    if (info.hasAttribute('class')) {
        info.removeAttribute('class')
    } else {
        info.setAttribute('class', 'hide')
    }
})