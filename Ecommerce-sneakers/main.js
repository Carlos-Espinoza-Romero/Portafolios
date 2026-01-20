const botonMenos = document.querySelector('#botonMenos')
const botonMas = document.querySelector('#botonMas')
const inputCantidad = document.querySelector('#inputCantidad')
const mainImage = document.querySelector('#main-image')
const miniatures = document.querySelectorAll('.miniature')

let contador = 1

botonMas.addEventListener('click', (event) => {
  event.preventDefault() // Evita que el formulario actualice la página completamente

  contador = contador + 1

  inputCantidad.value = contador
})

botonMenos.addEventListener('click', (event) => {
  event.preventDefault() 

  contador = contador - 1


  inputCantidad.value = contador
})


miniatures.forEach(miniature => {
  miniature.addEventListener('click', () => {
    const newSrc = miniature.src.replace('-thumbnail.jpg', '.jpg')

    mainImage.src = newSrc
   // Cambia la propiedad src de la imagen principal por la del thumbnail

    miniatures.forEach(t => t.parentElement.classList.remove('gallery__photo--active'));
    
    miniatures.parentElement.classList.add('gallery__photo--active');
  });
});

