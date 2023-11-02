//una forma mas nueva de agregar multiples controladores de eventos al mismo evento es con:
 addEventListener()
  //sintaxis:
   elemento.addEventListener("evento", controlador_de_eventos)

/*Cuando usamos métodos para agregar o eliminar eventos, usamos los nombres de los 
eventos y no los nombres de las propiedades. En lugar de onclick, escribimos click.*/
  const item = document.getElementsByClassName("item");
  
  function changeColor() {
    item.classList.toggle("pink");
  }
  item.addEventListener("click", changeColor);


//para remover detectores de eventos se usa:
  removeEventListener()

  //resulta útil si queremos que un evento solo ocurra un determinado numero de veces.
    //hacer que el elemento cambie de color solo una vez
    function changeColorOneTime() {
      item.classList.toggle("pink");
      item.removeEventListener("click", changeColorOneTime); //una vez que se llama el controlador el evento deja de escuchar cuando se ejecuta el evento
     }
     item.addEventListener("click", changeColorOneTime);

/*Si queremos que un elemento tenga múltiples controladores de eventos para el 
mismo elemento, podemos agregarlos uno por uno con el addEventListener()*/
const item2 = document.querySelector("div");
const el = document.querySelectorAll("button");

function changeWidth() {
  item2.classList.toggle("width");
}

function changeHeight() {
  item2.classList.toggle("height");
}
el[0].addEventListener("click", changeHeight);
el[0].addEventListener("click", changeWidth);
el[1].addEventListener("click", changeHeight);
el[2].addEventListener("click", changeWidth);
//nota: Para ejecutar este codigo comentar todo el codigo aparte

