import { sayHello } from "./greet";
import * as _ from 'lodash';

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  if (elt) {
    elt.innerText = sayHello(name);
  }

}

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

showHello("greeting", "TypeScript");

document.body.appendChild(component());
