document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.body.style.backgroundColor = "#EEF0F2";
            document.body.style.color = "#141B41";
            document.getElementsByTagName("a")[5].style.color = "#141B41";
            document.getElementsByTagName("a")[6].style.color = "#141B41";
            document.getElementsByTagName("a")[7].style.color = "#141B41";
            document.getElementsByTagName("h1")[0].style.color = "#EEF0F2"; 
            document.getElementsByTagName("h2")[0].innerHTML = "Resumen";
            document.getElementsByTagName("a")[0].innerHTML = "Sobre Mi";
            document.getElementsByTagName("a")[1].innerHTML = "Educacion";
            document.getElementsByTagName("a")[2].innerHTML = "Habilidades";
            document.getElementsByTagName("a")[3].innerHTML = "Contactos";
            document.getElementsByTagName("h2")[1].innerHTML = "Sobre Mi";
            document.getElementsByTagName("p")[0].innerHTML = "Soy un Ingeniero Civil que esta aprendiendo a programar por razones familiares que requieren que este en casa o cerca de ella la mayoria del tiempo.";
            document.getElementsByTagName("p")[1].innerHTML = "Cuando el momento de elegir una nueva carrera vino, pense en la programacion como una posibilidad en su mayoria por que es algo en lo que siempre estuve interesado, y habiendo empezado este camino estoy feliz de descubrir que como lo habia pensado es un campo muy interesante.";
            document.getElementsByTagName("p")[2].innerHTML = 'Siempre me a gustado trabajar con computadoras y ser parte de la cultura "geek" por lo que esta area me queda mejor de lo que pensaba al empezar, seguire aprendiendo y mejorando lo mas rapido que pueda usando lo que aprendi de mi primera carrera como base, despues de todo note que varias partes son similares y es algo que me inspira a seguir adelante.';
            document.getElementsByTagName("h2")[2].innerHTML = "Educacion";
            document.getElementsByTagName("li")[4].innerHTML = 'Bachillerato, Colegio Particular Catolico "San Francisco", Oruro, Bolivia.';
            document.getElementsByTagName("li")[5].innerHTML = 'Licenciatura, "Universidad Tecnica de Oruro", "Facultad Nacional de Ingenieria", Oruro, Bolivia.';
            document.getElementsByTagName("li")[6].innerHTML = 'Tesis "Drenaje Pluvial y Recarga de Acuíferos de la Zona Norte de Oruro".';
            document.getElementsByTagName("li")[7].innerHTML = 'Diplomado "Educación superior basada en competencias", "Universidad Mayor de San Simon", Cochabamba, Bolivia.';
            document.getElementsByTagName("a")[4].innerHTML = 'mas..';
            document.getElementsByTagName("h2")[3].innerHTML = "Habilidades";
            document.getElementsByTagName("li")[9].innerHTML = "Liderazgo, habilidad de planificacion y para organizacion.";
            document.getElementsByTagName("li")[10].innerHTML = "Puntualidad, adaptabilidad, creatividad para solucion de problemas y habilidades de comunicacion";
            document.getElementsByTagName("li")[11].innerHTML = "Bilingue: Español y Ingles";
            document.getElementsByTagName("li")[12].innerHTML = "Experiencia de trabajo como ingeniero civil y como traductor.";
            document.getElementsByTagName("li")[13].innerHTML = "HTML, CSS y Javascript";
            document.getElementsByTagName("h2")[4].innerHTML = "Contactos";
            console.log('checked');
        } else {
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
            document.getElementsByTagName("a")[5].style.color = "";
            document.getElementsByTagName("a")[6].style.color = "";
            document.getElementsByTagName("a")[7].style.color = "";
            document.getElementsByTagName("a")[0].innerHTML = "About Me";
            document.getElementsByTagName("a")[1].innerHTML = "Education";
            document.getElementsByTagName("a")[2].innerHTML = "Skills";
            document.getElementsByTagName("a")[3].innerHTML = "Contacts";
            document.getElementsByTagName("h2")[1].innerHTML = "About me";
            document.getElementsByTagName("p")[0].innerHTML = "I'm a Civil Engineer that is learning to code because of family matters that requires me to stay in house or at least be close to it most of the time.";
            document.getElementsByTagName("p")[1].innerHTML = "When the time came to select a new career, i tought of coding as a posibility mostly because is something a have always been interested in, and now that i've started this road i'm happy to see that is just as i tought an interesting field.";
            document.getElementsByTagName("p")[2].innerHTML = "I've always enjoyed working in computers and been a part of geek culture so this suits me better than i initialy tought, i will keep learning an improving as fast as i can using what i've learn from my first career as a basis, since i noticed how similar parts of them are and is something that drives me forward.";
            document.getElementsByTagName("h2")[2].innerHTML = "Education";
            document.getElementsByTagName("li")[4].innerHTML = 'High School Diploma, "San Francisco" private school, Oruro, Bolivia.';
            document.getElementsByTagName("li")[5].innerHTML = 'Bachelors degree, "Universidad Tecnica de Oruro", "Facultad Nacional de Ingenieria", Oruro, Bolivia.';
            document.getElementsByTagName("li")[6].innerHTML = 'Research thesis, "Drenaje Pluvial y Recarga de Acuíferos de la Zona Norte de Oruro".';
            document.getElementsByTagName("li")[7].innerHTML = 'Certified in "Superior Education", "Universidad Mayor de San Simon", Cochabamba, Bolivia.';
            document.getElementsByTagName("a")[4].innerHTML = 'more..';
            document.getElementsByTagName("h2")[3].innerHTML = "Skills";
            document.getElementsByTagName("li")[9].innerHTML = "Leadership, Planning and Organizing";
            document.getElementsByTagName("li")[10].innerHTML = "Punctuality, Quick learning, Problem solving and Good Comunication skill";
            document.getElementsByTagName("li")[11].innerHTML = "Bilingual: Spanish and English";
            document.getElementsByTagName("li")[12].innerHTML = "Working expirience as a Civil Engineer and translator";
            document.getElementsByTagName("li")[13].innerHTML = "HTML, CSS and Javascript";
            document.getElementsByTagName("h2")[4].innerHTML = "Contacts";
            console.log('not checked');
        }
    });
});
