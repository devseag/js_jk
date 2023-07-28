// import { one, two } from './main';
// import { one as first } from './main';

// console.log(first);

// console.log(`${one} and ${two}`);

// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

import { one, two } from './main.js';
// import sayHi from './main';
// import { default as sayHi } from './main';
import sayHi from './main.js';

console.log(`${one} and ${two}`);
sayHi();