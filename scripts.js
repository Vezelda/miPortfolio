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
      'habilidades': 'Habilidades',
      'proyectos': 'Proyectos',
      'sobreMi': 'Sobre mí',
      'contacto': 'Contacto',
      'proyectosDestacados': 'Proyectos Destacados',
      'proyecto1': 'Mi Portfolio',
      'proyecto1Desc': 'Desarrollo de mi Portfolio Web, aplicando mis conocimientos en HTML, CSS, Tailwindcss, JavaScript, Diseño Grafico, Diseño UX/UI.',
      'proyecto1Btn': 'Ver Proyecto',
      'proyecto1Repo': 'Ver Repositorio',
      'proyecto2': 'Página Web Empresarial',
      'proyecto2Desc': 'Pagina Web desarrollada para mostrar el trabajo de mi Padre, aplicando mis conocimientos en HTML, CSS, JavaScript, Diseño Grafico, Diseño UX/UI.',
      'proyecto2Btn': 'Ver Proyecto',
      'proyecto2Repo': 'Ver Repositorio',
      'proyecto3': 'Texto distinto',
      'proyecto3Desc': 'Aquí debe ir un nuevo texto distinto.',
      'proyecto3Btn': 'Ver Proyecto',
      'proyecto3Repo': 'Ver Repositorio',
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
      'resolucionProblemasDesc': 'Experto en identificar y resolver problemas complejos de manera eficiente.',
      'sobreMiTitulo': 'Sobre Mí',
      'sobreMiTexto1': 'Soy Aníbal Cardozo, un desarrollador web apasionado por crear aplicaciones modernas y eficientes. Con experiencia en JavaScript, Node.js, React y Tailwind CSS, siempre busco la excelencia en cada proyecto.',
      'sobreMiTexto2': 'Además de mi experiencia técnica, disfruto trabajando en equipo y aprendiendo constantemente nuevas tecnologías para mantenerme al día en un sector tan dinámico como el desarrollo web.',
      'sobreMiTexto3': 'Cuando no estoy programando, me encanta explorar nuevas habilidades, asi como tambien jugar videojuegos, aprender sobre nuevas metodologías de trabajo, y participar en proyectos que desafían mi creatividad.',
      'descargarCv': 'Descargar CV',
      'github':'GitHub'
    },
    'en': {
      'bienvenida': '- Web Developer -',
      'descripcion': 'I create high-quality web applications using HTML, CSS, JavaScript, Node.js, React.js, and more.',
      'inicio': 'Home',
      'habilidades': 'Skills',
      'proyectos': 'Projects',
      'sobreMi': 'About me',
      'contacto': 'Contact',
      'proyectosDestacados': 'Featured Projects',
      'proyecto1': 'My Portfolio',
      'proyecto1Desc': 'Development of my Web Portfolio, applying my knowledge in HTML, CSS, Tailwindcss, JavaScript, Graphics Design, UX / UI Design.',
      'proyecto1Btn': 'View Project',
      'proyecto1Repo': 'View Repository',
      'proyecto2': 'Business Website',
      'proyecto2Desc': "Web page developed to show my Father's work, applying my knowledge in HTML, CSS, JavaScript, Graphic Design, UX / UI Design.",
      'proyecto2Btn': 'View Project',
      'proyecto2Repo': 'View Repository',
      'proyecto3': 'Different Text',
      'proyecto3Desc': 'This should be a new different text.',
      'proyecto3Btn': 'View Project',
      'proyecto3Repo': 'View Repository',
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
      'resolucionProblemasDesc': 'Expert in identifying and solving complex problems efficiently.',
      'sobreMiTitulo': 'About Me',
      'sobreMiTexto1': 'I am Aníbal Cardozo, a web developer passionate about creating modern and efficient applications. With experience in JavaScript, Node.js, React and Tailwind CSS, I always seek excellence in every project.',
      'sobreMiTexto2': 'In addition to my technical expertise, I enjoy working as a team and constantly learning new technologies to stay up-to-date in a sector as dynamic as web development.',
      'sobreMiTexto3': "When I'm not programming, I love exploring new skills, as well as playing video games, learning about new work methodologies, and participating in projects that challenge my creativity.",
      'descargarCv': 'Download CV',
      'github': 'GitHub'
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

  const menuSkills = document.querySelector("a[href='#skills']");
  if (menuSkills) menuSkills.textContent = traduccion.habilidades;

  const menuProyectos = document.querySelector("a[href='#proyectos']");
  if (menuProyectos) menuProyectos.textContent = traduccion.proyectos;

  const menuSobreMi = document.querySelector("a[href='#sobre-mi']");
  if (menuSobreMi) menuSobreMi.textContent = traduccion.sobreMi;

  const menuContacto = document.querySelector("a[href='#contacto']");
  if (menuContacto) menuContacto.textContent = traduccion.contacto;



  // Actualiza secciones
  const proyectosH2 = document.querySelector("#projectsTitle");
  if (proyectosH2) proyectosH2.textContent = traduccion.proyectosDestacados;

  const proyecto1H3 = document.querySelector("#proyecto1");
  if (proyecto1H3) proyecto1H3.textContent = traduccion.proyecto1;

  const proyecto1Desc = document.querySelector("#proyecto1Desc");
  if (proyecto1Desc) proyecto1Desc.textContent = traduccion.proyecto1Desc;

  const proyecto1Btn = document.querySelector("#proyecto1Btn");
  if (proyecto1Btn) proyecto1Btn.textContent = traduccion.proyecto1Btn;

  const proyecto1Repo = document.querySelector("#proyecto1Repo");
  if (proyecto1Repo) proyecto1Repo.textContent = traduccion.proyecto1Repo;

  const proyecto2H3 = document.querySelector("#proyecto2");
  if (proyecto2H3) proyecto2H3.textContent = traduccion.proyecto2;

  const proyecto2Desc = document.querySelector("#proyecto2Desc");
  if (proyecto2Desc) proyecto2Desc.textContent = traduccion.proyecto2Desc;

  const proyecto2Btn = document.querySelector("#proyecto2Btn");
  if (proyecto2Btn) proyecto2Btn.textContent = traduccion.proyecto2Btn;

  const proyecto2Repo = document.querySelector("#proyecto2Repo");
  if (proyecto2Repo) proyecto2Repo.textContent = traduccion.proyecto2Repo;

  const proyecto3H3 = document.querySelector("#proyecto3");
  if (proyecto3H3) proyecto3H3.textContent = traduccion.proyecto3;

  const proyecto3Desc = document.querySelector("#proyecto3Desc");
  if (proyecto3Desc) proyecto3Desc.textContent = traduccion.proyecto3Desc;

  const proyecto3Btn = document.querySelector("#proyecto3Btn");
  if (proyecto3Btn) proyecto3Btn.textContent = traduccion.proyecto3Btn;

  const proyecto3Repo = document.querySelector("#proyecto3Repo");
  if (proyecto3Repo) proyecto3Repo.textContent = traduccion.proyecto3Repo;

  const sobreMiH2 = document.querySelector("#sobre-mi h2");
  if (sobreMiH2) sobreMiH2.textContent = traduccion.sobreMi;

  const sobreMiP = document.querySelector("#sobre-mi p");
  if (sobreMiP) sobreMiP.textContent = traduccion.sobreMiDescripcion;

  const contactoH2 = document.querySelector("#contacto h2");
  if (contactoH2) contactoH2.textContent = traduccion.contactoTitulo;

  const enviarButton = document.querySelector("button[type='submit']");
  if (enviarButton) enviarButton.textContent = traduccion.enviar;

  const nombreInput = document.querySelector("#nombreInput");
  if (nombreInput) nombreInput.placeholder = traduccion.nombre;

  const correoInput = document.querySelector("#correoInput");
  if (correoInput) correoInput.placeholder = traduccion.correo;

  const mensajeTextarea = document.querySelector("#mensajeTextarea");
  if (mensajeTextarea) mensajeTextarea.placeholder = traduccion.mensaje;





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

  const sobreMiTitulo = document.querySelector("#sobreMiTitulo");
  if (sobreMiTitulo) sobreMiTitulo.textContent = traduccion.sobreMiTitulo;

  const sobreMiTexto1 = document.querySelector("#sobreMiTexto1");
  if (sobreMiTexto1) sobreMiTexto1.textContent = traduccion.sobreMiTexto1;

  const sobreMiTexto2 = document.querySelector("#sobreMiTexto2");
  if (sobreMiTexto2) sobreMiTexto2.textContent = traduccion.sobreMiTexto2;

  const sobreMiTexto3 = document.querySelector("#sobreMiTexto3");
  if (sobreMiTexto3) sobreMiTexto3.textContent = traduccion.sobreMiTexto3;

  const descargarCv = document.querySelector("a[download]");
  if (descargarCv) descargarCv.textContent = traduccion.descargarCv;



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


// Función para resaltar la sección activa en el menú de navegación
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Se activa cuando al menos el 50% de la sección es visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active-link'); // Quita la clase activa de todos los enlaces
          if (link.getAttribute('href').includes(sectionId)) {
            link.classList.add('active-link'); // Añade la clase activa al enlace correspondiente
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section); // Observa cada sección
  });
});
