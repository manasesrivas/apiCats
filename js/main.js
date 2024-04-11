const url = 'https://api.thecatapi.com/v1/images/search'
const imagen = document.querySelector('#mostrarGato')


document.querySelector('#peticion').addEventListener('click', () => {
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        imagen.src = data[0].url;
    })
})
