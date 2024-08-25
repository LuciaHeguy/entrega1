function conectar() {
    let nombre = document.getElementById("inputUser").value;
    let contrasena = document.getElementById("inputPassword").value;
    
    if (nombre!=="" && contrasena !==""){

        localStorage.setItem(nombre, contrasena); // guarda la contraseña asociada al nombre
        location.href="index.html"; //redirecciona a index.html
    
    }else{

        alert ("Falta usuario o clave");

    }
    
}

document.addEventListener("DOMContentLoaded", function(){

    let button = document.getElementById("button");

    button.addEventListener("click", function(){
    
    conectar();

    });
    });