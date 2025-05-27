function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
    seccion.classList.remove('activa');
  });

  const activa = document.getElementById(id);
  if (activa) {
    setTimeout(() => {
      activa.classList.add('activa');
    }, 100);
  }
}

window.onload = () => mostrarSeccion('habilidades');

  
  