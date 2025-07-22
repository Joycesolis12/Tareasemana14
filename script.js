// Evento onload
function onPageLoad() {
    document.getElementById('loadMessage').innerText = 'La página ha cargado correctamente no lo olvidess.';
}

// Evento onunload
function onPageUnload() {
    alert('La página se está cerrando o navegando a otro lugar porfavor revisa.');
}

// Evento onerror y onabort
function onObjectError() {
    alert('Ha ocurrido un error al cargar el objeto porfavor revisa.');
}
