// Función para cambiar el idioma con un toggle switch
function cambiarIdioma() {
  const idiomaSwitch = document.getElementById('idiomaSwitch');
  const idiomaActual = idiomaSwitch.checked ? 'en' : 'es';  // Cambia dependiendo de si el toggle está activado o no

  // Cambiar los textos de la página
  const traducciones = {
    'es': {
      'bienvenida': '- Desarrollador Web -',
      'descripcion': 'Creo aplicaciones web de alta calidad usando HTML, CSS, JavaScript, Node.js, React.js, y más.',
      'inicio': 'Inicio',
      'proyectos': 'Proyectos',
      'sobreMi': 'Sobre mí',
      'contacto': 'Contacto',
      'proyectosDestacados': 'Proyectos Destacados',
      'proyecto1': 'Proyecto 1',
      'proyecto2': 'Proyecto 2',
      'proyectoDescripcion': 'Descripción breve del proyecto.',
      'sobreMiDescripcion': 'Soy Aníbal Cardozo, un desarrollador con experiencia en proyectos web y optimización de algoritmos.',
      'contactoTitulo': 'Contacto',
      'nombre': 'Nombre',
      'correo': 'Correo',
      'mensaje': 'Mensaje',
      'enviar': 'Enviar',
      'webDeveloper': '- Desarrollador Web -',
      'descripcionWebDev': 'Creo aplicaciones web de alta calidad usando HTML, CSS, JavaScript, Node.js, React.js, y más.',
      'explorarProyectos': 'Explora mis proyectos!',
      'misHabilidades': 'Mis Habilidades',
      'habilidadesBlandas': 'Habilidades Blandas',
      'comunicacion': 'Comunicación',
      'trabajoEquipo': 'Trabajo en equipo',
      'resolucionProblemas': 'Resolución de problemas',
      'comunicacionDesc': 'Excelentes habilidades para comunicar ideas y soluciones con claridad y efectividad.',
      'trabajoEquipoDesc': 'Capacidad para colaborar de manera efectiva en equipos multidisciplinarios.',
      'resolucionProblemasDesc': 'Experto en identificar y resolver problemas complejos de manera eficiente.'
    },
    'en': {
      'bienvenida': '- Web Developer -',
      'descripcion': 'I create high-quality web applications using HTML, CSS, JavaScript, Node.js, React.js, and more.',
      'inicio': 'Home',
      'proyectos': 'Projects',
      'sobreMi': 'About me',
      'contacto': 'Contact',
      'proyectosDestacados': 'Featured Projects',
      'proyecto1': 'Project 1',
      'proyecto2': 'Project 2',
      'proyectoDescripcion': 'Brief project description.',
      'sobreMiDescripcion': 'I am Aníbal Cardozo, a developer with experience in web projects and algorithm optimization.',
      'contactoTitulo': 'Contact',
      'nombre': 'Name',
      'correo': 'Email',
      'mensaje': 'Message',
      'enviar': 'Send',
      'webDeveloper': '- Web Developer -',
      'descripcionWebDev': 'I create high-quality web applications using HTML, CSS, JavaScript, Node.js, React.js, and more.',
      'explorarProyectos': 'Explore my projects!',
      'misHabilidades': 'My Skills',
      'habilidadesBlandas': 'Soft Skills',
      'comunicacion': 'Communication',
      'trabajoEquipo': 'Teamwork',
      'resolucionProblemas': 'Problem Solving',
      'comunicacionDesc': 'Excellent skills to communicate ideas and solutions clearly and effectively.',
      'trabajoEquipoDesc': 'Ability to collaborate effectively in multidisciplinary teams.',
      'resolucionProblemasDesc': 'Expert in identifying and solving complex problems efficiently.'
    }
  };

  const traduccion = traducciones[idiomaActual];

  // Actualiza la bienvenida
  const h2Element = document.querySelector("#inicio h2");
  if (h2Element) h2Element.textContent = traduccion.bienvenida;

  const pElement = document.querySelector("#inicio p");
  if (pElement) pElement.textContent = traduccion.descripcion;

  // Actualiza el menú
  const menuInicio = document.querySelector("a[href='#inicio']");
  if (menuInicio) menuInicio.textContent = traduccion.inicio;

  const menuProyectos = document.querySelector("a[href='#proyectos']");
  if (menuProyectos) menuProyectos.textContent = traduccion.proyectos;

  const menuSobreMi = document.querySelector("a[href='#sobre-mi']");
  if (menuSobreMi) menuSobreMi.textContent = traduccion.sobreMi;

  const menuContacto = document.querySelector("a[href='#contacto']");
  if (menuContacto) menuContacto.textContent = traduccion.contacto;

  // Actualiza secciones
  const proyectosH2 = document.querySelector("#proyectos h2");
  if (proyectosH2) proyectosH2.textContent = traduccion.proyectosDestacados;

  const proyecto1H3 = document.querySelector("#proyecto1 h3");
  if (proyecto1H3) proyecto1H3.textContent = traduccion.proyecto1;

  const proyecto2H3 = document.querySelector("#proyecto2 h3");
  if (proyecto2H3) proyecto2H3.textContent = traduccion.proyecto2;

  document.querySelectorAll(".proyecto-descripcion").forEach(el => {
    if (el) el.textContent = traduccion.proyectoDescripcion;
  });

  const sobreMiH2 = document.querySelector("#sobre-mi h2");
  if (sobreMiH2) sobreMiH2.textContent = traduccion.sobreMi;

  const sobreMiP = document.querySelector("#sobre-mi p");
  if (sobreMiP) sobreMiP.textContent = traduccion.sobreMiDescripcion;

  const contactoH2 = document.querySelector("#contacto h2");
  if (contactoH2) contactoH2.textContent = traduccion.contactoTitulo;

  const nombreInput = document.querySelector("input[placeholder='Nombre']");
  if (nombreInput) nombreInput.placeholder = traduccion.nombre;

  const correoInput = document.querySelector("input[placeholder='Correo']");
  if (correoInput) correoInput.placeholder = traduccion.correo;

  const mensajeTextarea = document.querySelector("textarea[placeholder='Mensaje']");
  if (mensajeTextarea) mensajeTextarea.placeholder = traduccion.mensaje;

  const enviarButton = document.querySelector("button[type='submit']");
  if (enviarButton) enviarButton.textContent = traduccion.enviar;

  // Actualiza los textos del portafolio
  const webDevText = document.querySelector("#webDevText");
  if (webDevText) webDevText.textContent = traduccion.webDeveloper;

  const descriptionText = document.querySelector("#descriptionText");
  if (descriptionText) descriptionText.textContent = traduccion.descripcionWebDev;

  const exploreButton = document.querySelector("#exploreButton");
  if (exploreButton) exploreButton.textContent = traduccion.explorarProyectos;

  // Actualiza la sección de habilidades
  const skillsTitle = document.querySelector("#skillsTitle");
  if (skillsTitle) skillsTitle.textContent = traduccion.misHabilidades;

  const habilidadesBlandas = document.querySelector("#habilidadesBlandas");
  if (habilidadesBlandas) habilidadesBlandas.textContent = traduccion.habilidadesBlandas;

  // Actualiza habilidades blandas
  document.querySelector("#comunicacionHabilidad").textContent = traduccion.comunicacion;
  document.querySelector("#comunicacionDesc").textContent = traduccion.comunicacionDesc;

  document.querySelector("#trabajoEquipoHabilidad").textContent = traduccion.trabajoEquipo;
  document.querySelector("#trabajoEquipoDesc").textContent = traduccion.trabajoEquipoDesc;

  document.querySelector("#resolucionProblemasHabilidad").textContent = traduccion.resolucionProblemas;
  document.querySelector("#resolucionProblemasDesc").textContent = traduccion.resolucionProblemasDesc;

  // Actualiza el texto del toggle switch
  const idiomaLabel = document.getElementById('idiomaLabel');
  idiomaLabel.textContent = idiomaActual.toUpperCase();
}


// Función para cambiar el tema con el icono de sol y luna
function cambiarTema() {
  const htmlElement = document.documentElement;
  const iconTema = document.getElementById('iconTema');

  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    iconTema.classList.remove('fa-moon');
    iconTema.classList.add('fa-sun');
    iconTema.classList.add('text-yellow-500');
    iconTema.classList.remove('text-gray-500');
  } else {
    htmlElement.classList.add('dark');
    iconTema.classList.remove('fa-sun');
    iconTema.classList.add('fa-moon');
    iconTema.classList.remove('text-yellow-500');
    iconTema.classList.add('text-gray-500');
  }
}

// Función para verificar el tema al cargar la página
function verificarTemaInicial() {
  const htmlElement = document.documentElement;
  const iconTema = document.getElementById('iconTema');

  // Verifica si el tema oscuro está activo por defecto
  if (htmlElement.classList.contains('dark')) {
    iconTema.classList.remove('fa-sun');
    iconTema.classList.add('fa-moon');
    iconTema.classList.add('text-gray-500');
  } else {
    iconTema.classList.remove('fa-moon');
    iconTema.classList.add('fa-sun');
    iconTema.classList.add('text-yellow-500');
  }
}

// Llama a la función cuando la página se carga
window.onload = verificarTemaInicial;

// Evento para hacer que el header cambie de opacidad al hacer scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const isDarkMode = document.documentElement.classList.contains('dark');

  if (window.scrollY > 50) {
    if (isDarkMode) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Fondo oscuro y opaco para modo oscuro
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Fondo blanco y opaco para modo claro
      header.style.color = 'rgba(0, 0, 0, 0.8)'; // Texto oscuro para modo claro
    }
    header.style.opacity = '0.9'; // Ajusta la opacidad
  } else {
    header.style.backgroundColor = ''; // Vuelve al color original
    header.style.color = ''; // Resetea el color del texto
    header.style.opacity = '1'; // Opacidad total al volver arriba
  }
});
