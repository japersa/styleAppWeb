var myboton = document.getElementsByClassName("clase1");
for (var i = 0; i < myboton.length; i++) {
    myboton[i].addEventListener('click', function () {
        alert("Hola");
    });
}
