'use strict';

'use strict';

const box = document.querySelector('.box'),
	  btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;


console.log(width, height);

btn.addEventListener('click', () => {
	// box.style.height = box.scrollHeight + 'px';
	console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

// console.log(style);
console.log(style.display);


console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop = 0;

// window.scrollBy(0, 300)

// window.scrollTo(0, 300)