// 1. Interacción con el DOM

// ------------------------1.1-----------------------------

// console.log(document.querySelector(".showme"))

// // ------------------------1.2-----------------------------

// console.log(document.querySelector("#pillado"))


// // ------------------------1.3-----------------------------

// console.log(document.querySelectorAll("p"))


// // ------------------------1.4-----------------------------

// console.log(document.querySelectorAll(".pokemon"))


// // ------------------------1.5-----------------------------

// console.log(document.querySelectorAll("span[data-function=testMe]"))


// // ------------------------1.6-----------------------------

// console.log(document.querySelectorAll("span[data-function=testMe]")[2])




// 2. Modificando el DOM

// // ------------------------2.1-----------------------------

// let newDiv = document.createElement("div")
// document.body.appendChild(newDiv)



// // ------------------------2.2-----------------------------

// function AddContent() {
//     let newDiv = document.createElement("div")
//     let newP = document.createElement("p")
//     newDiv.appendChild(newP)
//     let currentDiv = document.getElementsByClassName(".fn-insert-here")
//     document.body.insertBefore(newDiv, currentDiv)
// }

// AddContent()

// // ------------------------2.3-----------------------------

// function addContent() {
//     let newDiv = document.createElement("div")
//     for (i = 0; i <= 6; i++) {
//         let newContent = document.createElement("p")
//         let newText = document.createTextNode("Hola soy un párrafo")
//         newContent.appendChild(newText)
//         newDiv.appendChild(newContent)
//     }
//     document.body.appendChild(newDiv)
// }

// addContent()

// // ------------------------2.4-----------------------------

// let newP = document.createElement("p")
// let newPContent = document.createTextNode("Soy Dinámico")
// newP.appendChild(newPContent)
// document.body.appendChild(newP)

// // ------------------------2.5-----------------------------

// let currentH2 = document.querySelector(".fn-insert-here");
// currentH2.textContent = "Wubba Lubba dub dub";


// // ------------------------2.6-----------------------------

// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// let createDiv = document.createElement("div")
// createDiv.innerHTML = "<ul><li>Facebook</li><li>Netflix</li><li>Instagram</li><li>Snapchat</li><li>Twitter</li></ul>"
// document.body.appendChild(createDiv)


// // ------------------------2.7-----------------------------

// let deleteElements = document.querySelectorAll(".f-remove-me");
// deleteElements.remove();

// // ------------------------2.8-----------------------------

// const newParragraph = document.createElement("p")
// const newParragraphContent = document.createTextNode("Voy en medio!")
// newParragraph.appendChild(newParragraphContent)
// const sel = document.querySelector(".fn-insert-here")
// sel.insertAdjacentElement("afterend", newParragraph)

// // ------------------------2.9-----------------------------

const newP = document.createElement("p");
const newPContent = document.createTextNode("Voy dentro");
newP.appendChild(newPContent)

const divs = document.querySelectorAll(".fn-insert-here")

divs.appendChild(newP)