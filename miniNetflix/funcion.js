// Lista de Peliculas que aparecen por defecto
class Movie {
    constructor(titulo, ano, nacionalidad, genero, url) {
      this.titulo = titulo;
      this.ano = ano;
      this.nacionalidad = nacionalidad;
      this.genero = genero;
      this.url = url; 
    }
  }
  
  const peli1 = new Movie("Spiderman", 2000, "USA", "Superhéroes", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sm2022001cov.jpg");
  const peli2 = new Movie("Sipderman 2", 2002, "USA", "Superhéroes", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sm2022001cov.jpg");
  const peli3 = new Movie("Spiderman 3", 2004, "USA", "Superhéroes", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sm2022001cov.jpg");
  
  // Array de pelis
  let arrDePelis = [peli1, peli2, peli3];
  
  // Lista de profesionales que aparecen por defecto
  class Professional {
    constructor(nombre, edad, peso, altura, retirado, nacionalidad, oscars, profesion, foto) {
      this.nombre = nombre;
      this.edad = edad;
      this.peso = peso;
      this.altura = altura;
      this.retirado = retirado;
      this.nacionalidad = nacionalidad;
      this.oscars = oscars;
      this.profesion = profesion;
      this.foto = foto;
    }
  }
  
  const prof1 = new Professional("Actor 1", 20, 100, 180, false, "Europeo", 0, "Coctelero", "https://los40.com/los40/imagenes/2016/07/18/album/1468843297_675250_1468851723_album_normal.jpg");
  const prof2 = new Professional("Actor 2", 25, 60, 160, false, "India", 0, "Taxista", "https://los40.com/los40/imagenes/2016/07/18/album/1468843297_675250_1468851723_album_normal.jpg");
  const prof3 = new Professional("Actor 3", 30, 140, 170, false, "USA", 0, "Catador", "https://los40.com/los40/imagenes/2016/07/18/album/1468843297_675250_1468851723_album_normal.jpg");
  
  // Array de profesionales
  let arrDeProf = [prof1, prof2, prof3];
  
  // Onclick para mostrar las películas
function mostrarPeli() {
    const seccionPeliculas = document.getElementById('seccionPeli');
    seccionPeliculas.style.display = 'flex';
    // Añadir las tarjetas de Pelicula
    mostrarPeliculas();

    const seccionProfesional = document.getElementById('seccionProf');
    seccionProfesional.style.display = 'none';
  }
  
  
  // Onclick para mostrar los profesionales
  function mostrarProf() {
    const seccionProfesional = document.getElementById('seccionProf');
    seccionProfesional.style.display = 'flex';
    mostrarProfesionales();
    
    const seccionPeliculas = document.getElementById('seccionPeli');
    seccionPeliculas.style.display = 'none';
  }

  // Onclick para mostrar todo
  function mostrarTodo() {
    const seccionProfesional = document.getElementById('seccionProf');
    seccionProfesional.style.display = 'flex';
    mostrarProfesionales();
    
    const seccionPeliculas = document.getElementById('seccionPeli');
    seccionPeliculas.style.display = 'flex';
    mostrarPeliculas();
  }
  
  // Onclick para quitar la vista 
  function ocultar() {
    const seccionPeliculas = document.getElementById('seccionPeli');
    seccionPeliculas.style.display = 'none';
  
    const seccionProfesional = document.getElementById('seccionProf');
    seccionProfesional.style.display = 'none';
  }
  
  // Función que añade las películas ======================
  function mostrarPeliculas() {
    const seccionPeliculas = document.getElementById('seccionPeli');
    seccionPeliculas.innerHTML = '';  //Aparece vacío

    const tituloPeli = document.createElement('h2'); // Crear el título
    tituloPeli.classList.add('tituloPeli');
    tituloPeli.textContent = 'Peliculas';
    seccionPeliculas.appendChild(tituloPeli);

    
  
    arrDePelis.forEach((pelicula) => {
      const tarjetaPelicula = document.createElement('div'); // Crear el div donde va la tarjeta
      tarjetaPelicula.classList.add('galeria'); 
  
      const imagen = document.createElement('img'); // Crear el DIV imagen
      imagen.src = pelicula.url;
  
      const descripcion = document.createElement('div'); // Crear el DIV descripción
      descripcion.classList.add('desc');
      const lista = document.createElement('ul'); // Con la lista
      const titulo = document.createElement('li');
      titulo.textContent = `Título: ${pelicula.titulo}`;
      const ano = document.createElement('li');
      ano.textContent = `Año: ${pelicula.ano}`;
      const nacionalidad = document.createElement('li');
      nacionalidad.textContent = `Nacionalidad: ${pelicula.nacionalidad}`;
      const genero = document.createElement('li');
      genero.textContent = `Género: ${pelicula.genero}`;
  
      lista.appendChild(titulo);
      lista.appendChild(ano);
      lista.appendChild(nacionalidad);
      lista.appendChild(genero);
      descripcion.appendChild(lista);
  
      tarjetaPelicula.appendChild(imagen);
      tarjetaPelicula.appendChild(descripcion);
  
      seccionPeliculas.appendChild(tarjetaPelicula);
    });
  
    const formulario = document.createElement('div'); // Crear el Formulario
    formulario.classList.add('formulario');
    formulario.id = 'formulario';
  
    const tituloForm = document.createElement('h3');
    tituloForm.classList.add('tituloForm');
    tituloForm.textContent = 'Incluye una Peli!';
  
    const form = document.createElement('form');
    form.action = '';
  
    const tituloInput = document.createElement('input');
    tituloInput.type = 'text';
    tituloInput.id = 'titulo';
    tituloInput.placeholder = 'Título';
  
    const anoInput = document.createElement('input');
    anoInput.type = 'text';
    anoInput.id = 'ano';
    anoInput.placeholder = 'Año';
  
    const nacionalidadInput = document.createElement('input');
    nacionalidadInput.type = 'text';
    nacionalidadInput.id = 'nacionalidad';
    nacionalidadInput.placeholder = 'Nacionalidad';
  
    const generoInput = document.createElement('input');
    generoInput.type = 'text';
    generoInput.id = 'genero';
    generoInput.placeholder = 'Género';
  
    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.name = '';
    urlInput.id = 'url';
    urlInput.placeholder = 'URL de la imagen';
  
    form.appendChild(tituloInput);
    form.appendChild(anoInput);
    form.appendChild(nacionalidadInput);
    form.appendChild(generoInput);
    form.appendChild(urlInput);
  
    const incluirBtn = document.createElement('button');
    incluirBtn.classList.add('incluir');
    incluirBtn.textContent = 'Incluir!';
    incluirBtn.onclick = anadirPeli
  
    formulario.appendChild(tituloForm);
    formulario.appendChild(form);
    formulario.appendChild(incluirBtn);
  
    seccionPeliculas.appendChild(formulario);
  }
   
  // Funcion mostrar profesionales ==================================
  function mostrarProfesionales() {
    const seccionProfesionales = document.getElementById('seccionProf');
    seccionProfesionales.innerHTML = ''; // Aparece vacío

    const titulo2 = document.createElement('h2');
    titulo2.classList.add('titulo2');
    titulo2.textContent = 'Profesionales';
    seccionProfesionales.appendChild(titulo2);
  
    arrDeProf.forEach((profesional) => {
      const tarjetaProfesional = document.createElement('div'); // Crear el div donde va la tarjeta
      tarjetaProfesional.classList.add('galeria1');
  
      const imagen = document.createElement('img'); // Crear el DIV imagen
      imagen.src = profesional.foto;

      const descripcion = document.createElement('div'); // Crear el DIV descripción
      descripcion.classList.add('desc');
      const lista = document.createElement('ul'); // Con la lista
      const nombre = document.createElement('li');
      nombre.textContent = `Nombre: ${profesional.nombre}`;
      const edad = document.createElement('li');
      edad.textContent = `Edad: ${profesional.edad}`;
      const peso = document.createElement('li');
      peso.textContent = `Peso: ${profesional.peso}`;
      const altura = document.createElement('li');
      altura.textContent = `Altura: ${profesional.altura}`;
      const retirado = document.createElement('li');
      retirado.textContent = `Retirado: ${profesional.retirado}`;
      const nacionalidad = document.createElement('li');
      nacionalidad.textContent = `Nacionalidad: ${profesional.nacionalidad}`;
      const oscars = document.createElement('li');
      oscars.textContent = `Oscars: ${profesional.oscars}`;
      const profesion = document.createElement('li');
      profesion.textContent = `Profesión: ${profesional.profesion}`;
  
      lista.appendChild(nombre);
      lista.appendChild(edad);
      lista.appendChild(peso);
      lista.appendChild(altura);
      lista.appendChild(retirado);
      lista.appendChild(nacionalidad);
      lista.appendChild(oscars);
      lista.appendChild(profesion);
      descripcion.appendChild(lista);
  
      tarjetaProfesional.appendChild(imagen);
      tarjetaProfesional.appendChild(descripcion);
  
      seccionProfesionales.appendChild(tarjetaProfesional);
    });
  }

  // Funcion para añadir las pelis al array

  function anadirPeli() {
    const titulo = document.getElementById('titulo').value;
    const ano = document.getElementById('ano').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    const genero = document.getElementById('genero').value;
    const url = document.getElementById('url').value;
  
    const nuevaPeli = new Movie(titulo, ano, nacionalidad, genero, url);
  
    arrDePelis.push(nuevaPeli);
  
    // Limpiar los campos del formulario
    document.getElementById('titulo').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('nacionalidad').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('url').value = '';
  
    // Mostrar nuevamente las películas
    mostrarPeliculas();
  }