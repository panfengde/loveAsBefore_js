import _ from 'lodash';
import {
  loveAsBefore
} from './js_component/index.js'

import macro from './lab/macro.lab'
import code from './code/index.lab'


function component() {
  console.time(1)
  // lodash，现在通过一个 script 引入
  loveAsBefore(macro, code)
  console.timeEnd(1)



  const element = document.createElement('div');
  element.innerHTML = _.join([], ' ');
  return element;
}

document.body.appendChild(component());