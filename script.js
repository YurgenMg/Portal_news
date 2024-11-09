const fecha = new Date();
const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector('.fecha-actual').textContent = fecha.toLocaleDateString('es-ES', opciones);
