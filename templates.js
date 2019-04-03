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
    section.innerHTML = templ;
    
    // const btnAboutMe = section.querySelector('#aboutme')
    // btnAboutMe.addEventListener('click', () => {
    //     window.location.hash = '#/aboutMe';
    //   });
    return section;
    },
    aboutMe: () => {
        const templ = `
        <div class="">
        <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>Sobre mi</span></h1>
        <p class="description-1 padding-left float-1 text-general"><span class="quotes">"</span> Soy Front End Developer y marketera profesional, creativa, empática y curiosa 
          innata. Me encanta descubrir y aprender cosas nuevas porque siento que eso 
          alimenta mi espíritu creativo. <span class="quotes">"</span></p>
          <div class="slider">
            <ul>
              <li><img class="img-slide" src="img/foto17.jpg" alt=""></li>
              <li><img class="img-slide" src="img/foto5-1.jpg" alt=""></li>
              <li><img class="img-slide" src="img/foto7.jpg" alt=""></li>
              <li><img class="img-slide" src="img/foto3.jpg" alt=""></li>
            </ul>
          </div>

          <p class="description-1 padding-left float-3 text-general"><span class="quotes">"</span> Me apasiona poder crear productos digitales a través del código utilizando 
          una gran variedad de herramientas de programación, también me apasiona todo 
          aquello que rete y desafíe mis conocimientos, pues considero que es una 
          forma de motivación para seguir aprendiendo. <span class="quotes">"</span></p>

          <div class="slider float-1 margin space-left">
            <ul>
              <li><img class="img-slide" src="img/foto6-1.jpg" alt=""></li>
              <li><img class="img-slide" src="img/foto11-3.jpg" alt=""></li>
              <li><img class="img-slide" src="img/foto1-2.jpg" alt=""></li>
              <li><img class="img-slide" src="img/foto2-2.jpg" alt=""></li>
            </ul>
          </div>
  
        <p class="description-1 padding-left float-1 text-general space-top"><span class="quotes">"</span> Me adapto con facilidad, disfruto la libertad y el nivel de responsabilidad
           que implica trabajar individualmente, y también lo enriquecedor que resulta 
            trabajar en equipo. <span class="quotes">"</span></p>
            <div class="slider">
              <ul>
                <li><img class="img-slide" src="img/foto4.jpg" alt=""></li>
                <li><img class="img-slide" src="img/foto12.jpg" alt=""></li>
                <li><img class="img-slide" src="img/foto4-1.jpg" alt=""></li>
                <li><img class="img-slide" src="img/foto3-1.jpg" alt=""></li>
              </ul>
            </div>
      </div>`;
      const section = document.createElement('section');
      section.setAttribute('id', 'aboutMe');
      section.innerHTML = templ;

      return section;

    },
    portafolio: () => {
        const templ = `
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h2 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>PROYECTOS</span></h2>
        <p class="summary text-general">Estos son algunos de los proyectos desarrollados durante mi tiempo de preparación en Laboratoria.</p>
        <br>
        
        <div class="row">
          <div class="column">
            <div class="card padding-top center">
              <img src="img/lol3.JPG" alt="Jane" style="width:90%; height: 230px">
              <div class="container2 height">
              <h2 class="title-proyect text-general text-2">WIKILOL</h2>
                <p class="summary-2 text-general text-3">Es una página que permite a los jugadores de LOL encontrar información 
                   detallada de sus campeones como :<br>
                - Un Top Ten de los mejores campeones.<br>
                - Los tipos de campeones que existen.<br>
                - Los datos específicos de cada campeón.<br>
                - Cuánto aumentar el poder de ataque cuando avanza su nivel.</p>
                <p><a href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-data-lovers/tree/gh-pages" target="_blank"><button class="button">CODIGO</button></a></p>
                <p><a href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-data-lovers/src/" target="_blank"><button class="button">DEMO</button></a></p>
              </div>
            </div>
          </div>
        
          <div class="column">
            <div class="card padding-top center">
              <img src="img/red1.JPG" alt="Mike" style="width:90%; height: 230px">
              <div class="container2 height">
                <h2 class="title-proyect text-general text-2">JOINCLUDE</h2>
                <p class="summary-2 text-general">Es una red social orientado a personas feministas o que buscan
                   la equidad de género donde se podrá compartir ideas, historias 
                   e informacion relacionada al feminismo para llegar a ser una 
                   comunidad fuerte que genere impacto social en el mundo.</p>
                <p><a href="https://github.com/natalyJallo/LIM008-social-network/tree/gh-pages" target="_blank"><button class="button">CODIGO</button></a></p>
                <p><a href="https://micaelasuarezcortez.github.io/LIM008-social-network/src/" target="_blank"><button class="button">DEMO</button></a></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card padding-top center">
              <img src="img/md5.JPG" alt="John" style="width:90%; height: 230px">
              <div class="container2 height">
                <h2 class="title-proyect text-general text-2">MD-LINKS</h2>
                <p class="summary-2 text-general">Markdown Links es una libreria que extrae y valida cada 
                  link que haya dentro de un archivo o directorio en formato
                   markdown, muestra el resultado total de links, el total 
                   de links unicos y el total de links rotos.</p>
                <p><a href="https://github.com/natalyJallo/LIM008-fe-md-links/tree/master" target="_blank"><button class="button">CODIGO</button></a></p>
                <p><a href=""><button class="button" target="_blank">DEMO</button></a></p>
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
        <h2 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>HABILIDADES</span></h2>
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

        <div class="column2 nature">
        <a href="https://www.javascript.com/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/js.png" alt="javascript" style="width:50px">
            <h4 class="hight text-general font">JAVASCRIPT</h4>
          </div></a>
        </div>
        <div class="column2 nature">
          <a href="https://www.w3schools.com/html/" target="_blank" class="style-text2"><div class="content2">
          <img src="img/html.png" alt="html" style="width:50px">
            <h4 class="hight text-general font">HTML</h4>
          </div></a>
        </div>
        <div class="column2 nature">
        <a href="https://www.w3schools.com/css/" target="_blank" class="style-text2"><div class="content2">
          <img src="img/css1.png" alt="css" style="width:50px">
            <h4 class="hight text-general font">CSS</h4>
          </div></a>
        </div>
        
        <div class="column2 nature">
        <a href="https://nodejs.org/es/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/nodejs.png" alt="nodejs" style="width:50px">
            <h4 class="hight text-general font">NODE JS</h4>
          </div></a>
        </div>
        <div class="column2 nature">
        <a href="https://www.npmjs.com/" target="_blank" class="style-text2"><div class="content2">
          <img src="img/npm.png" alt="npm" style="width:50px">
            <h4 class="hight text-general font">NPM</h4>
          </div></a>
        </div>
        <div class="column2 nature">
        <a href="https://slack.com/intl/es-es/" target="_blank" class="style-text2"><div class="content2">
          <img src="img/slack.png" alt="slack" style="width:50px">
            <h4 class="hight text-general font">SLACK</h4>
          </div></a>
        </div>
      
        <div class="column2 editor" >
        <a href="https://code.visualstudio.com/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/visual.png" alt="visual" style="width:50px"></a>
            <h4 class="hight text-general font">VISUAL CODE</h4>
          </div></a>
        </div>
        <div class="column2 editor">
        <a href="https://atom.io/" target="_blank" class="style-text2"><div class="content2">
          <img src="img/atom.png" alt="atom" style="width:50px">
            <h4 class="hight text-general font">ATOM</h4>
          </div></a>
        </div>
        <div class="column2 nature">
        <a href="https://firebase.google.com/?hl=es-419" target="_blank" class="style-text2"><div class="content2">
          <img src="img/firebase.png" alt="firebase" style="width:50px">
            <h4 class="hight text-general font">FIREBASE</h4>
          </div></a>
        </div>
        <div class="column2 nature">
        <a href="https://git-scm.com/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/git2.png" alt="git" style="width:50px">
              <h4 class="hight text-general font">GIT</h4>
            </div></a>
          </div>
        <div class="column2 framework">
        <a href="https://angular.io/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/angular.png" alt="angular" style="width:50px">
              <h4 class="hight text-general font">ANGULAR</h4>
            </div></a>
          </div>
        <div class="column2 nature">
        <a href="https://getbootstrap.com/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/bootstrap.png" alt="bootstrap" style="width:50px">
              <h4 class="hight text-general font">BOOTSTRAP</h4>
            </div></a>
          </div>
        <div class="column2 nature">
        <a href="https://codepen.io/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/codepen.png" alt="codepen" style="width:50px">
              <h4 class="hight text-general font">CODEPEN</h4>
            </div></a>
          </div>
        <div class="column2 nature">
        <a href="https://trello.com/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/trello.png" alt="trello" style="width:50px">
              <h4 class="hight text-general font">TRELLO</h4>
            </div></a>
          </div>
        <div class="column2 nature">
        <a href="https://github.com/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/github.png" alt="github" style="width:50px">
              <h4 class="hight text-general font">GITHUB</h4>
            </div></a>
          </div>
      <div class="column2 nature">
      <a href="https://stackoverflow.com/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/stackoverflow.png" alt="stackoverflow" style="width:50px">
              <h4 class="hight text-general font font">STACKOVERFLOW</h4>
            </div></a>
          </div>
      <div class="column2 nature">
      <a href="" target="_blank" class="style-text2"><div class="content2">
            <img src="img/jest3.png" alt="jest" style="width:50px">
              <h4 class="hight text-general font">JEST</h4>
              </div></a>
            </div>
          <div class="column2 nature">
      <a href="https://developer.mozilla.org/es/" target="_blank" class="style-text2"><div class="content2">
            <img src="img/mdn.jpg" alt="mdn" style="width:50px">
              <h4 class="hight text-general font">MDN WEB DOCS</h4>
            </div></a>
          </div>
          <div class="column2 nature">
          <a href="https://www.figma.com/" target="_blank" class="style-text2"><div class="content2">
                <img src="img/figma.png" alt="figma" style="width:50px">
                  <h4 class="hight text-general font">FIGMA</h4>
                </div></a>
              </div>
              <div class="column2 nature">
          <a href="https://zeplin.io/" target="_blank" class="style-text2"><div class="content2">
                <img src="img/zeplin.png" alt="zeplin" style="width:50px">
                  <h4 class="hight text-general font">ZEPLIN</h4>
                </div></a>
              </div>
      <!-- END GRID -->
    </div>`;

        const section = document.createElement('section');
        section.setAttribute('id', 'skills');
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
        <div>
            <div class="">
               <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>CONTACTAME</span></h1>
               <h2 class="summary text-general">No dudes en contactarme, juntos podemos lograr buenos proyectos.</h2>
               <div class="btn-cv"><a class="center2" href="https://drive.google.com/open?id=1gIuFBSUPsfAEK9uH3ouv_feZfgn9MBM4" target="_blank">VER CV</a></div></div>
               <div class="colum-3 card title-proyect hight-2">
               <a href="https://github.com/natalyJallo" target="_blank" class="style-text2"><div class="content2">
               <img src="img/logo1.png" alt="github" style="width:50%">
                 <h4 class="text-general">Github</h4>
                 <h5 class="text-general">natalyJallo</h5>
               </div></a>
             </div>

             <div class="colum-3 card title-proyect hight-2">
             <a href="https://www.linkedin.com/in/nataly-jallo-arana-750394137/" target="_blank" class="style-text2"><div class="content2">
               <img src="img/linkedin.png" alt="linkedin" style="width:50%">
                 <h4 class="text-general">Linkedin</h4>
                 <h5 class="text-general">nataly jallo arana</h5>
               </div></a>
             </div>

             <div class="colum-3 card title-proyect hight-2">
             <a href="" target="_blank" class="style-text2"><div class="content2">
               <img src="img/cel.png" alt="celular" style="width:50%">
                 <h4 class="text-general">Celular</h4>
                 <h5 class="text-general">983 545 568</h5>
               </div></a>
             </div>

             <div class="colum-3 card title-proyect hight-2">
             <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" class="style-text2"><div class="content2">
               <img src="img/gmail1.png" alt="gmail" style="width:50%">
                 <h4 class="text-general">Gmail</h4>
                 <h5 class="text-general">marketing20.nat@gmail.com</h5>
               </div></a>
             </div>

             <div class="end"><h2>Realizado por Nataly Jallo Arana</h2></div>
    </div>`;

        const section = document.createElement('section');
        section.setAttribute('id', 'contact');
        section.setAttribute('style', 'height:100%')
        section.innerHTML = templ;

        return section;
    }
}