import _ from 'lodash';
import {
  loveAsBefore
} from './js_component/index.js'



function component() {
  
  // lodash，现在通过一个 script 引入
  loveAsBefore()
  const element = document.createElement('div');
  element.innerHTML = _.join([], ' ');
  return element;
}

document.body.appendChild(component());