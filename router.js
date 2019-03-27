import {templates} from './templates.js';

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTemp('#/welcome');
    } else if (hash === '#/aboutMe' || hash === '#/portafolio' || hash === '#/skills' || hash === '#/contact') {
      return viewTemp(hash);
    } else {
      return viewTemp('#/welcome');
    }
  };
  
  const viewTemp = (routers) => {
    let router = routers.substr(2, routers.length - 2);
    const container = document.getElementById('container');
    container.innerHTML = '';
    switch (router) {
    case 'welcome':
      container.appendChild(templates.welcome()); 
      break;
    case 'aboutMe':
      container.appendChild(templates.aboutMe());
      break;
    case 'portafolio':
      container.appendChild(templates.portafolio());
      break;
    case 'skills':
      container.appendChild(templates.skills());
      break;
    case 'contact':
      container.appendChild(templates.contact());
      break;
    // default:
    //   container.appendChild(templates.welcome());
    //   break;
    }
  };
    
  export const initRouter = () => {
    window.addEventListener('load', changeTmp(window.location.hash));
    if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
  };
  