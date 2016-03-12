//Escuchar el evento que se ejecuta cuando el documento termino de cargar
document.addEventListener("DOMContentLoaded", function(event) { 

    var name = document.getElementById('name'); //Obtener elementos por id
    var bulb = document.querySelector('#bulb'); //Obtener por id usando el sistem de busqueda de css
    var state = document.querySelector('.state'); //Obtener por clase

    //Estado de la lamparita
    var bulbOn = false;

    //Imagenes
    var bulbOnPicture = "http://www.w3schools.com/js/pic_bulbon.gif";
    var bulbOffPicture = "http://www.w3schools.com/js/pic_bulboff.gif";

    //Cambiar el HTML del elemento de id name
    name.innerHTML = "Pablo";

    //Funcion para cambiar el estado
    function toggleBulb() {

        if (bulbOn) {
            bulbOn = false; //Cambiar el estado de la lamparita
            bulb.src = bulbOffPicture; //Cambiar el origen de la imagen
            state.innerHTML = 'Apagada'; //Cambiar el texto del estado
            state.className = 'state'; //Cambiar la clase del estado
        } else {
            bulbOn = true;
            bulb.src = bulbOnPicture;
            state.innerHTML = 'Encendida';
            state.className = 'state on';
        }

    }

    //Escuchar el evento click que se da en el elemento que tiene data-action igual a toggle-bulb
    document.querySelector('[data-action=toggle-bulb]').addEventListener('click', function() {
        //Invokar la funcion toggleBulb
        toggleBulb();
    });

});