let nombre = prompt("Ingrse un nombre de usuario");
let clave = prompt("Ingrese clave");

while(nombre == " " && clave != " "){
    alert("Usted no ingreso un nombre");
}

while(nombre != " " && clave == " "){
    alert("Usted no ingreso su clave");
}

while(nombre != " " && clave != " "){
    console.log("Bienvenido" + nombre + 'usted creo un cuenta bienido al sitio web');

}
