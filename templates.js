// import {filterSelection, active} from "./app.js"

export const templates = {
    welcome: () => {
        const templ = `<div class="title hight text-general">
        <div class="text">
      <h1 class="text-effect">Hola.</h1>
      <h2 class="text2-section text-effect">Soy Nataly</h2>
      <h3 class="text3">Front End Developer</div>
      <div class="icons">
      <a href="https://github.com/natalyJallo" target="_blank"><img class="icon" src="img/github1.png" alt="github"><br></a>
      <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank"><img class="icon" src="img/google1.png" alt="gmail"><br></a>
      <a href="https://www.linkedin.com/in/nataly-jallo-arana-750394137/" target="_blank"><img class="icon" src="img/linked.png" alt="linkedin"><br></a>
      <a href="https://twitter.com/natijallo?lang=es" target="_blank"><img class="icon" src="img/twitter1.png" alt="twitter"><br></a>
      <a href="https://www.facebook.com/nati.jallo" target="_blank"><img class="icon" src="img/face.png" alt="facebook"></div></a>
      <a href="#/aboutMe" class="white-mode left">MAS SOBRE MI</a>
    </div>`;

    const section = document.createElement('section');
    section.setAttribute('id', 'welcome');
    section.setAttribute('class', 'welcome');
    section.innerHTML = templ;
    
    // const btnAboutMe = section.querySelector('#aboutme')
    // btnAboutMe.addEventListener('click', () => {
    //     window.location.hash = '#/aboutMe';
    //   });
    return section;
    },
    aboutMe: () => {
        const templ = `
        <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>Sobre mi</span></h1>
        <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Me encanta como soy. <span class="text-span">"Soy curiosa innata"</span></h2>
        <p class="lead">Soy Front End Developer y marketera profesional, creativa, empática y curiosa 
        innata. Me encanta descubrir y aprender cosas nuevas porque siento que eso 
        alimenta mi espíritu creativo. </p>
      </div>
      <div class="col-md-5">
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img src="img/foto17.jpg" class="d-block w-100 hight-3" alt="me gusta leer libros">
        </div>
        <div class="carousel-item" >
          <img src="img/foto5-1.jpg" class="d-block w-100 hight-3" alt="proyecto de chatbot en IBM">
        </div>
        <div class="carousel-item">
          <img src="img/foto3-1.jpg" class="d-block w-100 hight-3" alt="Equipo de trabajo con mariana costa">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      </div>
    </div>
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">La pasion por lo que haces, <span class="text-span">"te hara entender que los limites son mentales"</span></h2>
        <p class="lead">Me apasiona poder crear productos digitales a través del código utilizando 
        una gran variedad de herramientas de programación, también me apasiona todo 
        aquello que rete y desafíe mis conocimientos, pues considero que es una 
        forma de motivación para seguir aprendiendo.</p>
      </div>
      <div class="col-md-5 order-md-1">
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img src="img/foto6-1.jpg" class="d-block w-100" alt="Taller de chatbot en IBM">
        </div>
        <div class="carousel-item" >
          <img src="img/foto11-3.jpg" class="d-block w-100" alt="Codigo de programacion de un proyecto">
        </div>
        <div class="carousel-item">
          <img src="img/foto2-2.jpg" class="d-block w-100" alt="compartiendo un poco de tiempo libre despues de cada presentacion de proyecto">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      </div>
      </div>
    </div>
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Por ultimo. <span class="text-span">Disfruto la libertad como trabajar en equipo.</span></h2>
        <p class="lead">Me adapto con facilidad, disfruto la libertad y el nivel de responsabilidad
        que implica trabajar individualmente, y también lo enriquecedor que resulta 
         trabajar en equipo.</p>
      </div>
      <div class="col-md-5">
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img src="img/foto4.jpg" class="d-block w-100" alt="Mi equipo de proyecto en el taller de IBM">
        </div>
        <div class="carousel-item" >
          <img src="img/foto12.jpg" class="d-block w-100" alt="Presentando cada proyecto como reto en el bootcamp">
        </div>
        <div class="carousel-item">
          <img src="img/foto4-1.jpg" class="d-block w-100" alt="Todo el equipo de trabajo de Laboratoria y mis compañeras de bootcamp">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      </div>
      </div>
    </div>
    <hr class="featurette-divider">
        `;
      const section = document.createElement('section');
      section.setAttribute('id', 'aboutMe');
      section.setAttribute('class', 'padding-section');
      section.innerHTML = templ;

      return section;

    },
    portafolio: () => {
        const templ = `
        <div class="">
          <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>PROYECTOS</span></h1>
          <p class="summary text-general">Estos son algunos de los proyectos desarrollados durante mi tiempo de preparación en Laboratoria.</p>
          <br>
            <!-- Project Four -->
            <div class="row d-flex justify-content-center">
              <div class="col-sm-12 col-md-10 col-lg-6 col-xl-6 card-margin">
                <a href="#">
                <div class="img-container">
                  <img class="img-fluid rounded mb-3 mb-md-0" src="img/md5.JPG" alt="Proyecto de md links" style="width:100%; height: 350px">
                <div class="overlay over">
                  <span><a class="" href="https://i.ibb.co/nQQBRfD/md4.jpg" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de md-links" style="width:60px; height: 60px"></a></span>
                </div>
                </div>
              </a>
            </div>
            <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                <h3 class="text-proyect">MD-LINKS</h3>
                <p>Markdown Links es una libreria que extrae y valida cada 
                link que haya dentro de un archivo o directorio en formato
                markdown, muestra el resultado total de links, el total 
                 de links unicos y el total de links rotos.<br>
                 Herramientas:<br>
                 - NODE JS<br>
                 - MODULOS<br>
                 - JAVASCRIPT<br>
                 - GIT<br>
                 - NPM <br>
                 - JEST</p>
              <div class="btn-proyect">
                <a class="btn-2 bg-warning text-dark" href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-data-lovers/tree/gh-pages" target="_blank">Codigo</a>
                <a class="btn-2 bg-warning text-dark" href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-data-lovers/src/" target="_blank">Demo</a>
                </div>
              </div>
            </div>
            <!-- /.row -->
      
            <hr>
      
            <!-- Project Three -->
            <div class="row d-flex justify-content-center">
              <div class="col-sm-12 col-md-10 col-lg-6 col-xl-6 card-margin">
                <a href="#">
                <div class="img-container">
                <img class="img-fluid rounded mb-3 mb-md-0" src="img/red1.JPG" alt="proyecto de red social" style="width:100%; height: 350px; max-width:640px">
              <div class="overlay over">
                <span><a class="" href="https://i.ibb.co/10FNDFx/red1.jpg" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de joinclude" style="width:60px; height: 60px"></a></span>
              </div>
              </div>
                </a>
              </div>
              <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                <h3 class="text-proyect">JOINCLUDE</h3>
                <p>Es una red social orientado a personas feministas o que buscan
                la equidad de género donde se podrá compartir ideas, historias 
                e informacion relacionada al feminismo para llegar a ser una 
                comunidad fuerte que genere impacto social en el mundo.<br>
                Herramientas:<br>
                 - NODE JS<br>
                 - FIREBASE<br>
                 - SPA(Single Page Application)<br>
                 - CSS<br>
                 - JAVASCRIPT<br>
                 - GIT<br>
                 - FETCH<br>
                 - MOCK DE FIREBASE<br>
                 - JEST</p>
              <div class="btn-proyect">
                <a class="btn-2 bg-warning text-dark" href="https://github.com/natalyJallo/LIM008-social-network/tree/gh-pages" target="_blank">Codigo</a>
                <a class="btn-2 bg-warning text-dark" href="https://natalyjallo.github.io/LIM008-social-network/src" target="_blank">Demo</a>
                </div>
              </div>
            </div>
            <!-- /.row -->
      
            <hr>
      
            <!-- Project Two -->
            <div class="row d-flex justify-content-center">
              <div class="col-sm-12 col-md-10 col-lg-6 col-xl-6 card-margin">
                <a href="#">
                <div class="img-container">
                <img class="img-fluid rounded mb-3 mb-md-0" src="img/lol3.JPG" alt="proyecto de wikilol" style="width:100%; height: 350px; max-width:640px">
              <div class="overlay over">
                <span><a class="" href="https://i.ibb.co/FVQpxKm/lol2.jpg" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de wikilol" style="width:60px; height: 60px"></a></span>
              </div>
              </div>
                </a>
              </div>
              <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                <h3 class="text-proyect">WIKILOL</h3>
                <p>Es una página que permite a los jugadores de LOL encontrar información 
                 detallada de sus campeones como :<br>
                - Un Top Ten de los mejores campeones.<br>
                - Los tipos de campeones que existen.<br>
                - Los datos específicos de cada campeón.<br>
                - Cuánto aumentar el poder de ataque cuando avanza su nivel.
                Herramientas:<br>
                 - NODE JS<br>
                 - HTML<br>
                 - JAVASCRIPT<br>
                 - CSS<br>
                 - FETCH<br>
                 - JEST</p>
              <div class="btn-proyect">
                <a class="btn-2 bg-warning text-dark" href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-data-lovers/tree/gh-pages">Codigo</a>
                <a class="btn-2 bg-warning text-dark" href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-data-lovers/src">Demo</a>
                </div>
              </div>
            </div>
            <!-- /.row -->
      
            <hr>
      
            <!-- Project One -->
            <div class="row d-flex justify-content-center">
              <div class="col-sm-12 col-md-10 col-lg-6 col-xl-6 card-margin">
                <a href="#">
                <div class="img-container">
                <img class="img-fluid rounded mb-3 mb-md-0" src="img/cifrado.JPG" alt="Proyecto de cipher" style="width:100%; height: 350px">
              <div class="overlay over">
                <span><a class="" href="https://i.ibb.co/v48GRPy/cifrado.jpg" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de cifrado cesar" style="width:60px; height: 60px"></a></span>
              </div>
              </div>
                </a>
              </div>
              <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                <h3 class="text-proyect">CYBERHAPP</h3>
                <p>Es una aplicacion web que te ayuda a crear claves y/o contraseñas 
                secretas dificiles de hackear, donde puedes usar diferentes caracteres
                 del alfabeto(mayusculas y minusculas) y que no hay limites de extension
                  al crear tus contraseñas.<br>
                  Herramientas:<br>
                 - NODE JS<br>
                 - HTML<br>
                 - JAVASCRIPT<br>
                 - CSS<br>
                 - BOOTSTRAP<br>
                 - MOCHA Y CHAI<br>
                 - GIT<br>
                 - ETC</p>
                <div class="btn-proyect">
                 <a class="btn-2 bg-warning text-dark" href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-cipher">Codigo</a>
                <a class="btn-2 bg-warning text-dark" href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-cipher/src/">Demo</a>
                </div>
              </div>
            </div>
            <!-- /.row -->
      
          </div>
        `;

        const section = document.createElement('section');
        section.setAttribute('id', 'portafolio');
        section.setAttribute('class', 'padding-section');
        section.innerHTML = templ;

        return section;
    }, 
    skills: () => {
        const templ = `
        <div class="row2 margin1">
          <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>HABILIDADES </span></h1>
          <p class="summary text-general">Estas son las habilidades que desarrolle durante el Bootcamp.</p>

          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="radial-prog-area margin-b-30">
                <div class="radial-progress" data-prog-percent=".80" style="position: relative;">
                <h6 class="progress-title">Autoaprendizaje</h6>
                  <svg viewBox="0 0 100 100" style="display: block; width: 100%;">
                  <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#eee" stroke-width="1" fill-opacity="0"></path>
                  <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="rgb(251,173,6)" stroke-width="2.936" fill-opacity="0" style="stroke-dasharray: 304.844, 304.844; stroke-dashoffset: 60.9689;"></path></svg>
                  <div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(170, 170, 170);">80</div>
                </div>
                <h2 class="text-skills text-general">Puedo controlar mi nivel de aprendizaje</h2>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="radial-prog-area margin-b-30">
              <div class="radial-progress" data-prog-percent=".92" style="position: relative;">
                <h6 class="progress-title">Trabajo en equipo</h6>
                <svg viewBox="0 0 100 100" style="display: block; width: 100%;">
                  <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#eee" stroke-width="1" fill-opacity="0"></path>
                  <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="rgb(253,173,1)" stroke-width="2.995904" fill-opacity="0" style="stroke-dasharray: 304.844, 304.844; stroke-dashoffset: 24.3875;"></path></svg><div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(170, 170, 170);">92</div></div>
                <h2 class="text-skills text-general">Disfruto trabajar en equipo.</h2>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="radial-prog-area margin-b-30">
              <div class="radial-progress" data-prog-percent=".98" style="position: relative;">
              <div></div>
              <h6 class="progress-title">Empatía</h6>
                <svg viewBox="0 0 100 100" style="display: block; width: 100%;">
                <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#eee" stroke-width="1" fill-opacity="0"></path>
                <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="rgb(253,173,1)" stroke-width="2.999936" fill-opacity="0" style="stroke-dasharray: 304.844, 304.844; stroke-dashoffset: 6.09689;"></path></svg>
              <div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(170, 170, 170);">98</div></div>
                <h2 class="text-skills text-general">Me gusta poder ayudar a los demas.</h2>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
							<div class="radial-prog-area margin-b-30">
								<div class="radial-progress" data-prog-percent=".85" style="position: relative;">
									<div></div>
									<h6 class="progress-title">Metodología ágil (scrum)</h6>
								  <svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#eee" stroke-width="1" fill-opacity="0"></path><path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="rgb(252,173,3)" stroke-width="2.973" fill-opacity="0" style="stroke-dasharray: 304.844, 304.844; stroke-dashoffset: 45.7267;"></path></svg><div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(170, 170, 170);">85</div></div>
                  <h2 class="text-skills text-general">Me adapto a las metodologias agiles.</h2>
                </div>
              </div>
            
            <div class="col-sm-6 col-md-6 col-lg-4">
							<div class="radial-prog-area margin-b-50">
								<div class="radial-progress" data-prog-percent=".88" style="position: relative;">
									<div></div>
									<h6 class="progress-title">Manejo del estrés</h6>
								<svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#eee" stroke-width="1" fill-opacity="0"></path><path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="rgb(253,173,2)" stroke-width="2.986176" fill-opacity="0" style="stroke-dasharray: 304.844, 304.844; stroke-dashoffset: 36.5813;"></path></svg><div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(170, 170, 170);">88</div></div>
                <h2 class="text-skills text-general">Puedo manejar mi nivel de estres.</h2>
                </div>
            </div>
            
            <div class="col-sm-6 col-md-6 col-lg-4">
							<div class="radial-prog-area margin-b-50">
								<div class="radial-progress" data-prog-percent=".81" style="position: relative;">
									<div></div>
									<h6 class="progress-title">Adaptabilidad</h6>
								<svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#eee" stroke-width="1" fill-opacity="0"></path><path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="rgb(251,173,5)" stroke-width="2.945128" fill-opacity="0" style="stroke-dasharray: 304.844, 304.844; stroke-dashoffset: 57.9204;"></path></svg><div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(170, 170, 170);">81</div></div>
                <h2 class="text-skills text-general">Me puedo adaptar en diferentes ambientes.</h2>
                </div>
						</div>

        </div>
      </div>

      <p class="summary text-general">Estas son algunas de las herramientas que aprendí y utilicé durante el Bootcamp.</p>

      <!-- Portfolio Gallery Grid -->
      <!-- <div class="myBtnContainer" id="myBtnContainer">
          <button class="btn active" id="all">Todos</button>
          <button class="btn" id="editor">Editor</button>
          <button class="btn" id="frame">Frameworks</button>
          <button class="btn" id="lenguaje">Lenguajes de programacion</button>
          <button class="btn" id="test">Tests</button>
          <button class="btn" id="prototipo">Prototipo</button>
          <button class="btn" id="otros">Otros</button>
        </div>-->
      <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://www.javascript.com/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/js.png" alt="javascript" style="width:50px"></a>
            <h4 class="hight text-general font padding-2">JAVASCRIPT</h4>
          </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://www.w3schools.com/html/" target="_blank" class="style-text2">
          <div class="content2">
          <img src="img/html.png" alt="html" style="width:50px"></a>
            <h4 class="hight text-general font">HTML</h4>
          </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://www.w3schools.com/css/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/css1.png" alt="css" style="width:50px"></a>
              <h4 class="hight text-general font">CSS</h4>
          </div>
        </div>
        
        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://nodejs.org/es/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/nodejs.png" alt="nodejs" style="width:50px"></a>
            <h4 class="hight text-general font">NODE JS</h4>
          </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 editor cards-skill">
          <a href="https://www.npmjs.com/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/npm.png" alt="npm" style="width:50px"></a>
              <h4 class="hight text-general font">NPM</h4>
          </div>
        </div>
      
        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 editor cards-skill" >
          <a href="https://code.visualstudio.com/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/visual.png" alt="visual" style="width:50px"></a>
            <h4 class="hight text-general font">VISUAL CODE</h4>
          </div>
        </div>
        
        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://firebase.google.com/?hl=es-419" target="_blank" class="style-text2">
          <div class="content2">
          <img src="img/firebase.png" alt="firebase" style="width:50px"></a>
            <h4 class="hight text-general font">FIREBASE</h4>
          </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://git-scm.com/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/git2.png" alt="git" style="width:50px"></a>
              <h4 class="hight text-general font">GIT</h4>
            </div>
          </div>

        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 framework cards-skill">
          <a href="https://angular.io/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/angular.png" alt="angular" style="width:50px"></a>
              <h4 class="hight text-general font">ANGULAR</h4>
            </div>
          </div>
        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://getbootstrap.com/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/bootstrap.png" alt="bootstrap" style="width:50px"></a>
              <h4 class="hight text-general font">BOOTSTRAP</h4>
          </div>
        </div>
    
        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://trello.com/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/trello.png" alt="trello" style="width:50px"></a>
              <h4 class="hight text-general font">TRELLO</h4>
          </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://github.com/" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/github.png" alt="github" style="width:50px"></a>
              <h4 class="hight text-general font">GITHUB</h4>
          </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="" target="_blank" class="style-text2">
          <div class="content2">
            <img src="img/jest3.png" alt="jest" style="width:50px"></a>
              <h4 class="hight text-general font">JEST</h4>
          </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-3 col-xl-3 nature cards-skill">
          <a href="https://www.figma.com/" target="_blank" class="style-text2">
          <div class="content2">
                <img src="img/figma.png" alt="figma" style="width:50px"></a>
                  <h4 class="hight text-general font">FIGMA</h4>
          </div>
        </div>
      </div>
    </div>

      <!-- END GRID -->
      
    `;

        const section = document.createElement('section');
        section.setAttribute('id', 'skills');
        section.setAttribute('class', 'padding-section');
        section.innerHTML = templ;

        // const btnEditor = section.querySelector('#editor')
        // btnEditor.addEventListener('click', () => {
        //   filterSelection('editor');
        //   active(section);
        //   });

        return section;
    }, 
    contact: () => {
        const templ = `
        <div class="row2 margin1">
            <div class="">
               <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>CONTACTAME</span></h1>
               <h2 class="summary text-general">No dudes en contactarme, juntos podemos lograr buenos proyectos.</h2>
               <div class="btn-cv"><a class="center2" href="https://drive.google.com/open?id=1gIuFBSUPsfAEK9uH3ouv_feZfgn9MBM4" target="_blank">VER CV</a></div></div>
               
               <div class="row margin-contac">  
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-10 title-proyect hight-2">
               <a href="https://github.com/natalyJallo" target="_blank" class="style-text2"><div class="content2">
               <img src="img/logo1.png" alt="github" style="width:50%; margin-bottom: 20px;">
                 <h4 class="text-general">Github</h4>
                 <h5 class="text-general text-contact contact-2">natalyJallo</h5>
               </div></a>
             </div>

             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-10 title-proyect hight-2">
             <a href="https://www.linkedin.com/in/nataly-jallo-arana-750394137/" target="_blank" class="style-text2"><div class="content2">
               <img src="img/linkedin.png" alt="linkedin" style="width:50%; margin-bottom: 20px">
                 <h4 class="text-general">Linkedin</h4>
                 <h5 class="text-general text-contact contact-2">nataly jallo arana</h5>
               </div></a>
             </div>

             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-10 title-proyect hight-2">
             <a href="" target="_blank" class="style-text2"><div class="content2">
               <img src="img/cel.png" alt="celular" style="width:50%;margin-bottom: 20px">
                 <h4 class="text-general">Celular</h4>
                 <h5 class="text-general text-contact contact-2">983 545 568</h5>
               </div></a>
             </div>

             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-10 title-proyect hight-2">
             <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" class="style-text2"><div class="content2">
               <img src="img/gmail1.png" alt="gmail" style="width:50%; margin-bottom: 20px">
                 <h4 class="text-general">Gmail</h4>
                 <h5 class="text-general text-contact contact-2">marketing20.nat @gmail.com</h5>
               </div></a>
             </div>
             </div>
             
            </div>
            <div class="end"><h2 class="text-footer">Realizado por Nataly Jallo Arana</h2></div>
            `;

        const section = document.createElement('section');
        section.setAttribute('id', 'contact');
        section.setAttribute('class', 'padding-section');
        section.setAttribute('style', 'height:100%')
        section.innerHTML = templ;

        return section;
    }
}