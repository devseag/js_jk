const // btn = document.querySelector('button'),
	  btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// btn.addEventListener('mouseenter', (event) => {
//     console.log(event);
//     console.log(event.target);
//     event.target.remove();
//     // console.log('Hover');
// });

// btn.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
// });

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    // console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if ( i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// // btn.removeEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
} );