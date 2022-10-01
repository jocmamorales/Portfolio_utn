///Hago una variable para capturar el check del selector
var check = document.querySelector(".check");
///Esta clase detecta el evento y me lo guarda en check y llamo a la funcion "idioma"
check.addEventListener('click', idioma);

///La funcion idioma devuelve true o false dependendiendo que clikee entonces si es true redirige al html en ingles sino al html en español

function idioma() {
    let id = check.checked;
    if (id == true) {
        location.href = "es/index.html";
    }
    else {
        location.href = "../index.html";
    }
}