import _ from 'lodash';
import {
  loveAsBefore
} from './js_component/index.js'

import macro from './labCode/macro/macro.lab'
import code from './labCode/code/index.lab'
import test from './labCode/functionTest/index.lab'
import baseTest from './labCode/baseTest/index.lab'


function component() {
  console.time(1)
  // lodash，现在通过一个 script 引入
  loveAsBefore(baseTest)
  //loveAsBefore(test)
  //loveAsBefore(macro, code)
  console.timeEnd(1)



  const element = document.createElement('div');
  element.innerHTML = _.join([], ' ');
  return element;
}

document.body.appendChild(component());