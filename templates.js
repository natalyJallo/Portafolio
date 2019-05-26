
export const templates = {
    welcome: () => {
        const templ = `
                  <div class="title hight text-general">
                    <div class="text">
                      <h1 class="text-effect">Hola.</h1>
                      <h2 class="text2-section text-effect">Soy Nataly</h2>
                      <h2 class="text-white-50 mx-auto mt-2 mb-5 text3">Front End Developer</h2>
                      <a href="#/aboutMe" class="btn btn-warning js-scroll-trigger">Conóceme mas</a>
                    </div>
                  </div>
     `;

    const section = document.createElement('section');
    section.setAttribute('id', 'welcome');
    section.setAttribute('class', 'welcome');
    section.innerHTML = templ;
    
    return section;
    },
    aboutMe: () => {
      const templ = `
                      <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>Sobre mi</span></h1>
                      <div class="row featurette">

                        <div class="col-md-6 order-md-2">
                          <h2 class="featurette-heading" style="font-size: 1.3rem">Me encanta como soy. <span class="text-span">"Soy curiosa innata"</span></h2>
                            <p class="lead" style="font-size: 0.8rem; text-align: justify">Soy Front End Developer y marketera profesional, creativa, empática y curiosa 
                              innata.Desde pequeña he luchado contra muchas adversidades que me motivaron a buscar soluciones,
                              es por ello me gusta crear soluciones que genere un gran impacto en las personas, también me apasiona todo 
                              aquello que rete y desafíe mis conocimientos, pues considero que es una 
                              forma de motivación para seguir aprendiendo.</p>
                              <div class="row text-center">
                                <a href="./CV-NATALY.pdf" class="btn btn-xl btn-light mr-4 col-5" download="cv_Nataly_Jallo"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">¡Descarga mi CV!</font></font></a>
                                <a href="#/portafolio" class="btn btn-xl btn-dark col-5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mis proyectos</font></font></a>
                              </div>
                        </div>

                        <div class="col-md-6 order-md-1">
                          <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src="img/grupo-2.jpeg" class="d-block w-100" alt="Taller de chatbot en IBM">
                              </div>
                              <div class="carousel-item">
                                <img src="img/foto3-1.jpg" class="d-block w-100" alt="Trabajo en equipo">
                              </div>
                              <div class="carousel-item">
                               <img src="img/foto4-2.jpg" class="d-block w-100" alt="Charla en IBM">
                              </div>
                              <div class="carousel-item">
                               <img src="img/foto6-2.jpg" class="d-block w-100" alt="Taller de chatbot en IBM">
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

                      <footer class="bg-black small text-center text-white-50" style="margin-top: 10px">
                        <div class="container-fluid">
                          <div class="social d-flex justify-content-center" style="height: 30px;
                          margin-bottom: 10px" >
                            <a href="#" class="mx-2">
                              <img class="icon" src="img/logo-linkedin.png" alt="linkedin">
                            </a>
                            <a href="#" class="mx-2">
                              <img class="icon" src="img/simbolo-de-twitter.png" alt="twitter">
                            </a>
                            <a href="#" class="mx-2">
                              <img class="icon" src="img/github-1.png" alt="github">
                            </a>
                          </div>
                        </div>
                          <h3 style="font-size: 12px">Copyright &copy; Your Website 2019</h3>
                      </footer>
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

                        <!-- Project Six -->
                          <div class="row d-flex justify-content-center">
                            <div class="col-sm-12 col-md-10 col-lg-7 col-xl-7 card-margin">
                              <a href="#">
                              <div class="img-container">
                                <img class="img-fluid rounded mb-3 mb-md-0" src="img/alicorp.PNG" alt="Proyecto de md links" style="width:100%; height: 320px">
                              <div class="overlay over">
                                <span><a class="" href="https://i.ibb.co/PtWkDVM/alicorp.png" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de md-links" style="width:60px; height: 60px"></a></span>
                              </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                              <h3 class="text-proyect">Proyecto TalentFest19 - Cliente Álicorp</h3>
                              <p class="text-proyects">Plataforma de venta interna para generar colaboradores emprendedores dentro de la empresa de álicorp.<br>
                                - Registro de personal<br>
                                - Selección de productos a comprar<br>
                                - Plataforma de compra y venta de productos<br>
                              Herramientas:<br>
                                <li class="text-proyects">Angular</li>
                                <li class="text-proyects">Typescript</li>
                                <li class="text-proyects">Firebase</li>
                                <li class="text-proyects">Bootstrap</li><br>
                            <div class="btn-proyect line-heigth">
                              <a class="btn-2 bg-warning center2 " href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-data-lovers/tree/gh-pages" target="_blank">Codigo</a>
                              <a class="btn-2 bg-warning center2 " href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-data-lovers/src/" target="_blank">Demo</a>
                              </div>
                            </div>
                          </div>
                          <!-- /.row -->
                    
                          <hr>

                        <!-- Project Five -->
                          <div class="row d-flex justify-content-center">
                            <div class="col-sm-12 col-md-10 col-lg-7 col-xl-7 card-margin">
                              <a href="#">
                              <div class="img-container">
                                <img class="img-fluid rounded mb-3 mb-md-0" src="img/burger-queen.PNG" alt="Proyecto de md links" style="width:100%; height: 320px">
                              <div class="overlay over">
                                <span><a class="" href="https://i.ibb.co/q9YF1KP/burger-queen.png" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de md-links" style="width:60px; height: 60px"></a></span>
                              </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                              <h3 class="text-proyect">Burger Queen</h3>
                              <p class="text-proyects">Framework Angular<br>
                              Interfaz empleando el framework de Angular, en la cual se realizan 
                              pedidos a través de una tablet y estos pedidos son enviados a la 
                              cocina en tiempo real para que el personal de cocina tome la orden
                               y ejecute el pedido del cliente.<br>
                               - Registra datos y número de orden del cliente<br>
                               - Registra hora del pedido<br>
                               - Realiza los cálculos según el pedido que corresponda<br>
                              Herramientas:<br>
                                <li class="text-proyects">Angular</li>
                                <li class="text-proyects">Typescript</li>
                                <li class="text-proyects">Firebase</li>
                                <li class="text-proyects">Bootstrap</li><br>
                            <div class="btn-proyect line-heigth">
                              <a class="btn-2 bg-warning center2 " href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-data-lovers/tree/gh-pages" target="_blank">Codigo</a>
                              <a class="btn-2 bg-warning center2 " href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-data-lovers/src/" target="_blank">Demo</a>
                              </div>
                            </div>
                          </div>
                          <!-- /.row -->
                    
                          <hr>

                          <!-- Project Four -->
                          <div class="row d-flex justify-content-center">
                            <div class="col-sm-12 col-md-10 col-lg-7 col-xl-7 card-margin">
                              <a href="#">
                              <div class="img-container">
                                <img class="img-fluid rounded mb-3 mb-md-0" src="img/md5.JPG" alt="Proyecto de md links" style="width:100%; height: 320px">
                              <div class="overlay over">
                                <span><a class="" href="https://i.ibb.co/nQQBRfD/md4.jpg" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de md-links" style="width:60px; height: 60px"></a></span>
                              </div>
                              </div>
                            </a>
                          </div>
                          <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                              <h3 class="text-proyect">Librería Md-links</h3>
                              <p class="text-proyects">CLI y API<br>
                              Markdown Links es una libreria que extrae y valida cada 
                              link que haya dentro de un archivo o directorio en formato
                              markdown, muestra el resultado total de links, el total 
                              de links unicos y el total de links rotos.<br>
                              Herramientas:<br>
                              <li class="text-proyects">Codigo Vanilla</li>
                              <li class="text-proyects">Node Fetch</li>
                              <li class="text-proyects">Regex</li>
                              <li class="text-proyects">Node js</li><br>
                            <div class="btn-proyect line-heigth">
                              <a class="btn-2 bg-warning center2 " href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-data-lovers/tree/gh-pages" target="_blank">Codigo</a>
                              <a class="btn-2 bg-warning center2 " href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-data-lovers/src/" target="_blank">Demo</a>
                              </div>
                            </div>
                          </div>
                          <!-- /.row -->
                    
                          <hr>
                    
                          <!-- Project Three -->
                          <div class="row d-flex justify-content-center">
                            <div class="col-sm-12 col-md-10 col-lg-7 col-xl-7 card-margin">
                              <a href="#">
                              <div class="img-container">
                              <img class="img-fluid rounded mb-3 mb-md-0" src="img/red1.JPG" alt="proyecto de red social" style="width:100%; height: 320px; max-width:640px">
                            <div class="overlay over">
                              <span><a class="" href="https://i.ibb.co/10FNDFx/red1.jpg" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de joinclude" style="width:60px; height: 60px"></a></span>
                            </div>
                            </div>
                              </a>
                            </div>
                            <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                              <h3 class="text-proyect">Joinclude</h3>
                              <p class="text-proyects">Es una red social orientado a personas feministas o que buscan
                              la equidad de género donde se podrá compartir ideas, historias 
                              e informacion relacionada al feminismo para llegar a ser una 
                              comunidad fuerte que genere impacto social en el mundo.<br>
                              Herramientas:<br>
                              <li class="text-proyects">Node js</li>
                              <li class="text-proyects">Firebase</li>
                              <li class="text-proyects">Spa(Single Page Application)</li>
                              <li class="text-proyects">Fetch</li>
                              <li class="text-proyects">Mock Firebase</li>
                              <li class="text-proyects">Jest</li>
                              <li class="text-proyects">Css Plano</li><br>
                            <div class="btn-proyect line-heigth">
                              <a class="btn-2 bg-warning center2 " href="https://github.com/natalyJallo/LIM008-social-network/tree/gh-pages" target="_blank">Codigo</a>
                              <a class="btn-2 bg-warning center2 " href="https://natalyjallo.github.io/LIM008-social-network/src" target="_blank">Demo</a>
                              </div>
                            </div>
                          </div>
                          <!-- /.row -->
                    
                          <hr>
                    
                          <!-- Project Two -->
                          <div class="row d-flex justify-content-center">
                            <div class="col-sm-12 col-md-10 col-lg-7 col-xl-7 card-margin">
                              <a href="#">
                              <div class="img-container">
                              <img class="img-fluid rounded mb-3 mb-md-0" src="img/lol3.JPG" alt="proyecto de wikilol" style="width:100%; height: 320px; max-width:640px">
                            <div class="overlay over">
                              <span><a class="" href="https://i.ibb.co/FVQpxKm/lol2.jpg" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de wikilol" style="width:60px; height: 60px"></a></span>
                            </div>
                            </div>
                              </a>
                            </div>
                            <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                              <h3 class="text-proyect">Wikilol</h3>
                              <p class="text-proyects">Es una página que permite a los jugadores de LOL encontrar información 
                              detallada de sus campeones como :<br>
                              - Un Top Ten de los mejores campeones.<br>
                              - Los tipos de campeones que existen.<br>
                              - Los datos específicos de cada campeón.<br>
                              - Cuánto aumentar el poder de ataque cuando avanza su nivel.<br>
                              Herramientas:<br>
                              <li class="text-proyects">Node js</li>
                              <li class="text-proyects">Css Plano</li>
                              <li class="text-proyects">Fetch</li>
                              <li class="text-proyects">Jest</li>
                              <li class="text-proyects">Codigo Vanilla</li><br>
                            <div class="btn-proyect line-heigth">
                              <a class="btn-2 bg-warning center2 " href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-data-lovers/tree/gh-pages">Codigo</a>
                              <a class="btn-2 bg-warning center2 " href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-data-lovers/src">Demo</a>
                              </div>
                            </div>
                          </div>
                          <!-- /.row -->
                    
                          <hr>
                    
                          <!-- Project One -->
                          <div class="row d-flex justify-content-center">
                            <div class="col-sm-12 col-md-10 col-lg-7 col-xl-7 card-margin">
                              <a href="#">
                              <div class="img-container">
                              <img class="img-fluid rounded mb-3 mb-md-0" src="img/cifrado.JPG" alt="Proyecto de cipher" style="width:100%; height: 320px">
                            <div class="overlay over">
                              <span><a class="" href="https://i.ibb.co/v48GRPy/cifrado.jpg" target="_blank"><img class="" src="img/zoom.png" alt="proyecto de cifrado cesar" style="width:60px; height: 60px"></a></span>
                            </div>
                            </div>
                              </a>
                            </div>
                            <div class="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                              <h3 class="text-proyect">Cyberhapp</h3>
                              <p class="text-proyects">Es una aplicacion web que te ayuda a crear claves y/o contraseñas 
                              secretas dificiles de hackear, donde puedes usar diferentes caracteres
                              del alfabeto(mayusculas y minusculas) y que no hay limites de extension
                                al crear tus contraseñas.<br>
                                Herramientas:<br>
                                <li class="text-proyects">Node js</li>
                                <li class="text-proyects">Css Plano</li>
                                <li class="text-proyects">Mocha y Chai</li>
                                <li class="text-proyects">Codigo Vanilla</li><br>
                              <div class="btn-proyect line-heigth">
                              <a class="btn-2 bg-warning center2 " href="https://github.com/natalyJallo/lim-2018-11-bc-core-am-cipher">Codigo</a>
                              <a class="btn-2 bg-warning center2 " href="https://natalyjallo.github.io/lim-2018-11-bc-core-am-cipher/src/">Demo</a>
                              </div>
                            </div>
                          </div>
                          <!-- /.row -->

                          <footer class="bg-black small text-center text-white-50" style="margin-top: 10px">
                        <div class="container-fluid">
                          <div  >
                            <a href="#" class="mx-2">
                              <img class="icon" src="img/logo-linkedin.png" alt="linkedin">
                            </a>
                            <a href="#" class="mx-2">
                              <img class="icon" src="img/simbolo-de-twitter.png" alt="twitter">
                            </a>
                            <a href="#" class="mx-2">
                              <img class="icon" src="img/github-1.png" alt="github">
                            </a>
                          </div>
                        </div>
                          <h3 style="font-size: 12px">Copyright &copy; Your Website 2019</h3>
                      </footer>
                    
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

        <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>HABILIDADES </span></h1>
        <div class="row2 margin1">
          
          <p class="summary text-general">Estas son las habilidades blandas que he podido desarrollar durante mi desarrollo profesional.</p>

          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="radial-prog-area margin-b-30" style="text-align: center" >
                <img src="img/equipo.png" alt="" style="">
                <h2 class="text-skills text-general">Disfruto trabajar en equipo</h2>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="radial-prog-area margin-b-30" style="text-align: center">
                <img src="img/ayudar.png" alt="" style="">
                <h2 class="text-skills text-general">Me gusta poder ayudar a los demas</h2>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="radial-prog-area margin-b-30" style="text-align: center">
                <img src="img/idea-genial.png" alt="" style="">
                <h2 class="text-skills text-general">Me adapto a las metodologias agiles</h2>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="radial-prog-area margin-b-30" style="text-align: center">
                <img src="img/dibujo.png" alt="" style="">
                <h2 class="text-skills text-general">Puedo manejar mi nivel de estres</h2>
              </div>
            </div>
            
            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="radial-prog-area margin-b-30" style="text-align: center">
                <img src="img/red.png" alt="" style="">
                <h2 class="text-skills text-general">Me puedo adaptar en diferentes ambientes</h2>
              </div>
            </div>
            
            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="radial-prog-area margin-b-30" style="text-align: center">
                <img src="img/estudiante.png" alt="" style="">
                <h2 class="text-skills text-general">Puedo controlar mi nivel de aprendizaje</h2>
              </div>
            </div>
          </div>
        </div>


        <h1 class="title-2 padding text3" id="title2">HERRAMIENTAS DE PROGRAMACIÓN</h1>
        <p class="summary text-general">Estas son algunas de las herramientas que aprendí y utilicé durante el Bootcamp.</p>
        

        <div class="row">

          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="service-icon rounded-circle mx-auto mb-3" style="background-color: #f9cd4af0; height: 140px; text-align: center;width: 140px;">
            <img src="img/angular.png" alt="angular" style="width:90px; margin-top: 25px">
            </div>
            <h4 class="style-skill">Angular</h4>
          </div>

          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="service-icon rounded-circle mx-auto mb-3" style="background-color: #f9cd4af0; height: 140px; text-align: center;width: 140px;">
              <img src="img/js.png" alt="javascript" style="width:90px; margin-top: 25px">
            </div>
            <h4 class="style-skill">Javascript</h4>
          </div>

          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="service-icon rounded-circle mx-auto mb-3" style="background-color: #f9cd4af0; height: 140px; text-align: center;width: 140px;">
              <img src="img/html.png" alt="html" style="width:90px; margin-top: 25px">
            </div>
            <h4 class="style-skill">Html5</h4>
          </div>

          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="service-icon rounded-circle mx-auto mb-3" style="background-color: #f9cd4af0; height: 140px; text-align: center;width: 140px;"> 
              <img src="img/css1.png" alt="css" style="width:90px; margin-top: 25px">
            </div>
            <h4 class="style-skill">Css3</h4>
          </div>
        
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="service-icon rounded-circle mx-auto mb-3" style="background-color: #f9cd4af0; height: 140px; text-align: center;width: 140px;">
              <img src="img/node-1.png" alt="nodejs" style="width:90px; margin-top: 25px">
            </div>
            <h4 class="style-skill">Node Js</h4>
          </div>
        
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="service-icon rounded-circle mx-auto mb-3" style="background-color: #f9cd4af0; height: 140px; text-align: center;width: 140px;">
              <img src="img/firebase.png" alt="firebase" style="width:90px; margin-top: 25px">
            </div>
            <h4 class="style-skill">Firebase</h4>
          </div>

          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="service-icon rounded-circle mx-auto mb-3" style="background-color: #f9cd4af0; height: 140px; text-align: center;width: 140px;">
              <img src="img/bootstrap.png" alt="bootstrap" style="width:90px; margin-top: 25px">
            </div>
            <h4 class="style-skill">Bootstrap</h4>
          </div>
    
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="service-icon rounded-circle mx-auto mb-3" style="background-color: #f9cd4af0; height: 140px; text-align: center;width: 140px;">  
            <img src="img/trello.png" alt="trello" style="width:90px; margin-top: 25px">
            </div>
            <h4 class="style-skill">Trello</h4>
          </div>

          </div>
        </div>

        <footer class="bg-black small text-center text-white-50" style="margin-top: 10px">
          <div class="container-fluid">
            <div  >
              <a href="#" class="mx-2">
                <img class="icon" src="img/logo-linkedin.png" alt="linkedin">
              </a>
              <a href="#" class="mx-2">
                <img class="icon" src="img/simbolo-de-twitter.png" alt="twitter">
              </a>
              <a href="#" class="mx-2">
                <img class="icon" src="img/github-1.png" alt="github">
              </a>
            </div>
          </div>
          <h3 style="font-size: 12px">Copyright &copy; Your Website 2019</h3>
        </footer>
      
        <!-- END GRID -->
    `;

        const section = document.createElement('section');
        section.setAttribute('id', 'skills');
        section.setAttribute('class', 'padding-section');
        section.innerHTML = templ;

        return section;
    }, 
    contact: () => {
        const templ = `
        <h1 class="text-section padding text-general text3" id="title2" contenteditable="false" spellcheck="false"><span>CONTACTAME</span></h1>
        <h2 class="summary text-general">No dudes en contactarme, juntos podemos lograr buenos proyectos.</h2>
        
        <div class="row margin1" style="justify-content: center">
            <div class="btn-cv col-2"><a href="./CV-NATALY.pdf" class="center2" download="cv_Nataly_Jallo"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">¡Descarga mi CV!</font></font></a></div>
            <div class="btn-cv col-2"><a href="#/portafolio" class="center2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mis proyectos</font></font></a></div>    
        </div>
        
        <section class="contact-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <img src="img/ubicacion.png" alt="direccion" style="width:20%;margin-bottom: 20px">
                    <h4 class="text-uppercase m-0">Direccion</h4>
                    <hr class="my-4">
                    <div class="small text-black-50">Ate Vitarte, Lima - Peru</div>
                  </div>
                </div>
              </div>
    
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <img src="img/correo.png" alt="correo" style="width:20%;margin-bottom: 20px">
                    <h4 class="text-uppercase m-0">Email</h4>
                    <hr class="my-4">
                    <div class="small text-black-50">
                      <a href="#">frontenddev.natalyjallo@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
    
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <img src="img/telefono-inteligente.png" alt="celular" style="width:20%;margin-bottom: 20px">
                    <h4 class="text-uppercase m-0">Phone</h4>
                    <hr class="my-4">
                    <div class="small text-black-50">+51 983 545 568</div>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </section>
    
      <!-- Footer -->
      
        <footer class="bg-black small text-center text-white-50" style="margin-top: 10px">
          <div class="container-fluid">
            <div  >
              <a href="#" class="mx-2">
                <img class="icon" src="img/logo-linkedin.png" alt="linkedin">
              </a>
              <a href="#" class="mx-2">
                <img class="icon" src="img/simbolo-de-twitter.png" alt="twitter">
              </a>
              <a href="#" class="mx-2">
                <img class="icon" src="img/github-1.png" alt="github">
              </a>
            </div>
          </div>
          <h3 style="font-size: 12px">Copyright &copy; Your Website 2019</h3>
        </footer>

            `;

        const section = document.createElement('section');
        section.setAttribute('id', 'contact');
        section.setAttribute('class', 'padding-section');
        section.setAttribute('style', 'height:100%')
        section.innerHTML = templ;

        return section;
    }
}