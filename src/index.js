"use strict";

import _ from 'lodash';
import {
  loveAsBeforeExplain
} from './js_component/index.js'

import macro from './labCode/macro/macro.lab'

import code from './labCode/code/index.lab'
import test from './labCode/functionTest/index.lab'
import baseTest from './labCode/baseTest/index.lab'
import labTest from './labCode/labTest/index.lab'


import parseXml from './xml2layout/parseXml/index.lab'
import json2canvas from './js_component/drawComponents/index.lab'
import compiler from './labCode/compiler/index.lab'



function component() {
  console.time(1)
  // lodash，现在通过一个 script 引入
  // loveAsBeforeExplain(macro)
  // loveAsBeforeExplain(baseTest)

  /*  loveAsBeforeExplain(macro)
   loveAsBeforeExplain(parseXml)
   loveAsBeforeExplain(json2canvas) */

  //loveAsBeforeExplain(labTest)
  //loveAsBeforeExplain( code)
  //loveAsBeforeExplain(macro, parseXml)
  //loveAsBeforeExplain(macro, parseXml, json2canvas)
  loveAsBeforeExplain(compiler)
  //loveAsBeforeExplain()
  console.timeEnd(1)
  //下面不要动
  const element = document.createElement('div');
  element.innerHTML = _.join([], ' ');
  return element;
}
document.body.appendChild(component());
