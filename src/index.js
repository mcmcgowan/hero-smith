import './styles/main.scss'
import jsIcon from './assets/jsIcon.png';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Just a change';
    const icon = new Image()
    icon.src = jsIcon;

    element.appendChild(icon)
    return element;
  }
  
  document.body.appendChild(component());