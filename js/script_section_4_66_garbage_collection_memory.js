// function func() {
//     window.smth = 'string';
// }

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// function outer() {
//     const pootentiallyHugeArray = [];
//     return function inner() {
//         pootentiallyHugeArray.push('Hello');
//         console.log('Hello!!!');
//     };
// }

// const sayHello = outer();

function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    // return div;
    document.body.append(testDiv);
}

// const testDiv = createElement();
createElement();

// document.body.append(testDiv);

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();