export const templates = {
    welcome: () => {
        const templ = `<div class="title hight text-general-1">
        <div class="text">
      <h1 class="text-effect">Hola.</h1>
      <h2 class="text2-section text-effect">Soy Nataly</h2></div>
      <div class="icons">
      <img class="icon" src="img/github1.png" alt="github"><br>
      <img class="icon" src="img/google1.png" alt="github"><br>
      <img class="icon" src="img/linked.png" alt="github"><br>
      <img class="icon" src="img/twitter1.png" alt="github"><br>
      <img class="icon" src="img/face.png" alt="github"></div>
      <a href="#/aboutMe" class="white-mode">MAS SOBRE MI</a>
    </div>`;

    const section = document.createElement('section');
    section.setAttribute('id', 'welcome');
    section.innerHTML = templ;
    
    // const btnAboutMe = section.querySelector('#aboutme')
    // btnAboutMe.addEventListener('click', () => {
    //     window.location.hash = '#/aboutMe';
    //   });
    return section;
    },
    aboutMe: () => {
        const templ = `
        <div class="description-personal">
        <h1 class="text-section padding">Sobre mi</h1>
        <p class="description-1 padding-left float-1"> Soy Front End Developer y marketera profesional, creativa, empática y curiosa 
          innata. Me encanta descubrir y aprender cosas nuevas porque siento que eso 
          alimenta mi espíritu creativo.</p>
          <div class="slider">
            <ul>
              <li><img class="img-slide" src="img/grupo2.jpg" alt=""></li>
              <li><img class="img-slide" src="img/grupo4.jpg" alt=""></li>
              <li><img class="img-slide" src="img/grupo3.jpg" alt=""></li>
              <li><img class="img-slide" src="img/grupo5.jpg" alt=""></li>
            </ul>
          </div>

          <div class="slider float-1 margin">
            <ul>
              <li><img class="img-slide" src="img/grupo2.jpg" alt=""></li>
              <li><img class="img-slide" src="img/grupo4.jpg" alt=""></li>
              <li><img class="img-slide" src="img/grupo3.jpg" alt=""></li>
              <li><img class="img-slide" src="img/grupo5.jpg" alt=""></li>
            </ul>
          </div>
  
        <p class="description-1 padding-left float-3">Me apasiona poder crear productos digitales a través del código utilizando 
          una gran variedad de herramientas de programación, también me apasiona todo 
          aquello que rete y desafíe mis conocimientos, pues considero que es una 
          forma de motivación para seguir aprendiendo.</p>
  
        <p class="description-1 padding-left float-1">Me adapto con facilidad, disfruto la libertad y el nivel de responsabilidad
           que implica trabajar individualmente, y también lo enriquecedor que resulta 
            trabajar en equipo.</p>
            <div class="slider">
              <ul>
                <li><img class="img-slide" src="img/grupo2.jpg" alt=""></li>
                <li><img class="img-slide" src="img/grupo4.jpg" alt=""></li>
                <li><img class="img-slide" src="img/grupo3.jpg" alt=""></li>
                <li><img class="img-slide" src="img/grupo5.jpg" alt=""></li>
              </ul>
            </div>
      </div>`;
      const section = document.createElement('section');
      section.setAttribute('id', 'aboutMe');
      section.innerHTML = templ;
  
    //   const btn = section.querySelector('#aboutme')
    //   btnAboutMe.addEventListener('click', () => {
    //       window.location.hash = '#/aboutMe';
    //     });
      return section;

    },
    portafolio: () => {
        const templ = `
        <div class="Portafolio">
        <h2 class="text-section padding">PROYECTOS</h2>
        <p class="summary text-general">Estos son algunos de los proyectos desarrollados durante mi tiempo de preparación en Laboratoria.</p>
        <br>
        
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
              <div class="container2">
                <h2 class="title-proyect text-general">WIKILOL</h2>
                <p class="title">PROYECTO 1</p>
                <p class="summary-2 text-general">Es una página que permite a los jugadores de LOL encontrar información 
                   detallada de sus campeones como :
                    Cuales son los más fuertes contamos con un Top Ten
                    Los tipos de campeones que existen
                    Los datos específicos de cada campeón
                    Cuánto aumentar el poder de ataque cuando avanza su nivel.</p>
                
                <p><button class="button">CODIGO</button></p>
                <p><button class="button">DEMO</button></p>
              </div>
            </div>
          </div>
        
          <div class="column">
            <div class="card">
              <img src="/w3images/team2.jpg" alt="Mike" style="width:100%">
              <div class="container2">
                <h2 class="title-proyect text-general">JOINCLUDE</h2>
                <p class="title">PROYECTO 2</p>
                <p class="summary-2 text-general">Es una red social orientado a personas feministas o que buscan
                   la equidad de género donde se podrá compartir ideas, historias 
                   e informacion relacionada al feminismo para llegar a ser una 
                   comunidad fuerte que genere impacto social en el mundo.</p>
                
                <p><button class="button">CODIGO</button></p>
                <p><button class="button">DEMO</button></p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="/w3images/team3.jpg" alt="John" style="width:100%">
              <div class="container2">
                <h2 class="title-proyect text-general">MD-LINKS</h2>
                <p class="title">PROYECTO 3</p>
                <p class="summary-2 text-general">Markdown Links es una libreria que extrae y valida cada 
                  link que haya dentro de un archivo o directorio en formato
                   markdown, muestra el resultado total de links, el total 
                   de links unicos y el total de links rotos.</p>
                
                <p><button class="button">CODIGO</button></p>
                <p><button class="button">DEMO</button></p>
              </div>
            </div>
          </div>
        </div>

    </div>`;

        const section = document.createElement('section');
        section.setAttribute('id', 'portafolio');
        section.innerHTML = templ;

        return section;
    }, 
    skills: () => {
        const templ = `
        <div class="row2 margin1">
        <h2 class="text-section padding">HABILIDADES</h2>
        <p class="summary text-general">Estas son algunas de las herramientas que aprendí y utilicé durante el Bootcamp.</p>
      <!-- Portfolio Gallery Grid -->
      <div class="myBtnContainer" id="myBtnContainer">
          <button class="btn active"> Show all</button>
          <button class="btn"> Nature</button>
          <button class="btn"> Cars</button>
          <button class="btn"> People</button>
        </div>

        <div class="column2 nature">
          <div class="content">
            <img src="img/js.png" alt="Mountains" style="width:100%">
            <h4 class="hight text-general">JAVASCRIPT</h4>
          </div>
        </div>
        <div class="column2 nature">
          <div class="content">
          <img src="img/html.png" alt="Lights" style="width:100%">
            <h4 class="hight text-general">HTML</h4>
          </div>
        </div>
        <div class="column2 nature">
          <div class="content">
          <img src="img/css1.png" alt="Nature" style="width:100%">
            <h4 class="hight text-general">CSS</h4>
          </div>
        </div>
        
        <div class="column2 nature">
          <div class="content">
            <img src="img/nodejs.png" alt="Car" style="width:100%">
            <h4 class="hight text-general">NODE JS</h4>
          </div>
        </div>
        <div class="column2 nature">
          <div class="content">
          <img src="img/npm.png" alt="Car" style="width:100%">
            <h4 class="hight text-general">NPM</h4>
          </div>
        </div>
        <div class="column2 nature">
          <div class="content">
          <img src="img/slack.png" alt="Car" style="width:100%">
            <h4 class="hight text-general">SLACK</h4>
          </div>
        </div>
      
        <div class="column2 nature">
          <div class="content">
            <img src="img/visual.png" alt="Car" style="width:100%">
            <h4 class="hight text-general">VISUAL CODE</h4>
          </div>
        </div>
        <div class="column2 nature">
          <div class="content">
          <img src="img/atom.png" alt="Car" style="width:100%">
            <h4 class="hight text-general">ATOM</h4>
          </div>
        </div>
        <div class="column2 nature">
          <div class="content">
          <img src="img/firebase.png" alt="Car" style="width:100%">
            <h4 class="hight text-general">FIREBASE</h4>
          </div>
        </div>
        <div class="column2 nature">
            <div class="content">
            <img src="img/git2.png" alt="Car" style="width:100%">
              <h4 class="hight text-general">GIT</h4>
            </div>
          </div>
        <div class="column2 nature">
            <div class="content">
            <img src="img/angular.png" alt="Car" style="width:100%">
              <h4 class="hight text-general">ANGULAR</h4>
            </div>
          </div>
        <div class="column2 nature">
            <div class="content">
            <img src="img/bootstrap.png" alt="Car" style="width:100%">
              <h4 class="hight text-general">BOOTSTRAP</h4>
            </div>
          </div>
        <div class="column2 nature">
            <div class="content">
            <img src="img/codepen.png" alt="Car" style="width:100%">
              <h4 class="hight text-general">CODEPEN</h4>
            </div>
          </div>
        <div class="column2 nature">
            <div class="content">
            <img src="img/trello.png" alt="Car" style="width:100%">
              <h4 class="hight text-general">TRELLO</h4>
            </div>
          </div>
        <div class="column2 nature">
            <div class="content">
            <img src="img/github.png" alt="Car" style="width:100%">
              <h4 class="hight text-general">GITHUB</h4>
            </div>
          </div>
      <div class="column2 nature">
            <div class="content">
            <img src="img/stackoverflow.png" alt="Car" style="width:100%">
              <h4 class="hight text-general">STACKOVERFLOW</h4>
            </div>
          </div>
      <!-- END GRID -->
    </div>`;

        const section = document.createElement('section');
        section.setAttribute('id', 'skills');
        section.innerHTML = templ;

        return section;
    }, 
    contact: () => {
        const templ = ``;

        const section = document.createElement('section');
        section.setAttribute('id', 'contact');
        section.innerHTML = templ;

        return section;
    }
}