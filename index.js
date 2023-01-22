const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const button = document.querySelector('.submit')
const info = document.querySelector('.info')
const prom = document.querySelector('.how_to')
const inputValue = document.querySelector('input')
info.setAttribute('style','display:none;')
button.addEventListener('click', () => {
    fetch(url + inputValue.value)
    .then((response) => response.json())
    .then((data) => {
        try {
            console.log(data);
            info.setAttribute('style', '')
            document.querySelector('.definition').innerHTML = data[0].meanings[0].definitions[0].definition   
        } catch (error) {
            console.log(error)
        }
    })
})