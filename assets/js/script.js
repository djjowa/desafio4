

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

let enviarCorreo = document.getElementById("enviarCorreo");
enviarCorreo.addEventListener("click", () => {
    alert("El correo fue enviado correctamente...");
});

$(document).scroll( function(e){
  const y = $("html").scrollTop();
  if(y > 400) $("nav").addClass("nav-black")
  else $("nav").removeClass("nav-black")
})

