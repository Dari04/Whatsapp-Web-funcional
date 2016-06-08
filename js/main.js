//public void enviarMsgApp(View view) {
  //  Intent intent = new Intent(Intent.ACTION_SEND);
    //intent .setType("text/plain");
    //String texto = "Mensaje para enviar aqui";
    //intent .setPackage("com.whatsapp");
   // if (intent != null) {
     //   intent .putExtra(Intent.EXTRA_TEXT, texto);
       // startActivity(Intent.createChooser(intent, texto));
    //} else {
      //  Toast.makeText(this,"Nooo whatsapp, whatsapp man",  
        //               Toast.LENGTH_SHORT)
          //             .show();
    //}
//}
document.getElementById("texto").addEventListener("keypress", myFunction);

function myFunction() {
    document.getElementById("texto");

    var textoValue = gettextoValue();
    if(event.keyCode==13) {
        doañadir(textoValue);
        clean();
    }
    
}
function gettextoValue() {
    var texto = document.getElementById("texto");
    return texto.value;
}
function añadir() {
    var textoValue = gettextoValue();
    if (textoValue !== "") {
        doañadir(textoValue);
        clean();
    }
}
function doañadir(textoDeContenido) {
    var fecha= new Date()
    var hours= fecha.getHours();
    var min= fecha.getMinutes();
    var place = document.getElementById("place");
    var content = '<div class="box right space verde1">' + '<p class="parrafo1">' + textoDeContenido + '</p>' +'<span class="time2">'+hours+':'+min+'</span>'
    '</div>';
    //Crear el elemento
    
    var elemento = document.createElement("div");
    elemento.className = "añadir";
    elemento.innerHTML = content;

    //Agregar elementos
    place.appendChild(elemento);

    
}
function clean() {
    var texto = document.getElementById("texto");
    texto.value = "";
    texto.focus();
}
///
function persona() {
    document.getElementById("junis").src = "image/mariana.jpg";
    document.getElementById("principaltext").innerHTML = "Marianas";
}