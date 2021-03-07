//import "core-js/es/array";
//import '../js/first.js';
import { sayHello } from "./greet";
// import * as _ from 'lodash';

function showHello(divName: string, name: string) {
  const array = [1, 2, 3];

  const elt = document.getElementById(divName);
  if (elt) {
    elt.innerText = sayHello(name);
    Array.from(array).forEach(($item) => {
      
                  elt.innerText += $item;
    })
  }
}

function component(): HTMLDivElement {
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
}

document.body.appendChild(component());

showHello("greeting", "TypeScript");

