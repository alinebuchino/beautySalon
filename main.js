/* ABRE E FECHA O MENU */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ENTÃO ESCONDER O MENU */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* COLOCAR SOMBRA NO HEADER QUANDO DER SCROLL (ROLAR A PÁGINA) */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* SWIPER */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1 /* total de depoimento que irá aparecer, neste caso 1 no mobile */,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLL REVEAL */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .car,
  #depoimentos header, #depoimentos .depoimentos,
  #contact .text, #contact .links,
  #footer .brand, #footer .social`,
  { interval: 100 }
)

/* BOTÃO VOLTAR PARA O TOPO */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Cria funções acima e só adiciona elas aqui */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
