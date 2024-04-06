document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.getElementsByTagName("a")[0].innerHTML = "Sobre Mi";
            document.getElementsByTagName("a")[1].innerHTML = "Educacion";
            document.getElementsByTagName("a")[2].innerHTML = "Habilidades";
            document.getElementsByTagName("a")[3].innerHTML = "Contactos";
            console.log('checked');
        } else {
            console.log('not checked');
        }
    });
});
