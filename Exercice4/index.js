const button = document.getElementById("myButton")
const body = document.querySelector("body")

button.addEventListener('click', () => {
    let newP = document.createElement("p")
    newP.innerText = `Bonjour, vous avez cliqué sur le bouton !`
    body.appendChild(newP)
})