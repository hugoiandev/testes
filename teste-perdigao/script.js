const titulo = document.querySelector('.titulo')
const logo = document.querySelector('.logo-perdigao')

const entradaTexto = setInterval(() => {
    titulo.classList.remove('remove')
    titulo.classList.add('ativo')
}, titulo.dataset.entradaTexto)

const saidaTexto = setInterval(() => {
    titulo.classList.add('remove')
    titulo.classList.remove('ativo')
}, titulo.dataset.saidaTexto)

const entradaLogo = setInterval(() => {
    logo.classList.remove('remove')
    logo.classList.add('ativo')
}, logo.dataset.entradaLogo)

const saidaLogo = setInterval(() => {
    logo.classList.add('remove')
    logo.classList.remove('ativo')
}, logo.dataset.saidaLogo)