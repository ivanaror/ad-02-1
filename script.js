const h1Element = document.getElementById("red");
const h4Element = document.getElementById("gray");
const h5Element = document.getElementById("green");


console.log(h1Element.textContent); // Muestra el texto del elemento h1 con id "red"
console.log(h4Element.textContent); // Muestra el texto del elemento h4 con id "gray"
console.log(h5Element.textContent); // Muestra el texto del elemento h5 con id "green"  

h1Element.textContent = "Adios"; 
h4Element.textContent = "Ahora estoy en gris"; 
h5Element.textContent = "Cambie el texto a un color verde"; 


h1Element.style.color = "orange";
h4Element.style.color = "gray";
h5Element.style.color = "green";
h1Element.style.fontSize = "75px";
h4Element.style.fontSize = "35px";
h5Element.style.fontSize = "20px";

h1Element.addEventListener("click", (event) => {
    console.log(event); 
    h1Element.textContent = "Adios"; 
    h1Element.style.color = "brown";
});
