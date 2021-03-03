import _ from 'lodash';
import {
  loveAsBefore
} from './js_component/index.js'

import macro from './labCode/macro/macro.lab'

import code from './labCode/code/index.lab'
import test from './labCode/functionTest/index.lab'
import baseTest from './labCode/baseTest/index.lab'


import parseXml from './xml2layout/parseXml/index.lab'



function base() {
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = 1000; //☜
  canvas.height = 500;
}
base()


function component() {
  console.time(1)
  // lodash，现在通过一个 script 引入
  //loveAsBefore(baseTest)
  //loveAsBefore(test)

  loveAsBefore(macro,parseXml)

  //loveAsBefore()
  console.timeEnd(1)
  //下面不要动
  const element = document.createElement('div');
  element.innerHTML = _.join([], ' ');
  return element;
}
document.body.appendChild(component());
