// function isPangram(string) {

// 	// console.log(string.toLowerCase().replaceAll(' ','').split('').sort());
// 	// console.log(string.toLowerCase().replaceAll(' ','').split('').sort());
// 	// console.log(new Set(string.toLowerCase().replaceAll(' ','').split('').sort()));
// 	const str = 'abcdefghijklmnoprstuvwxyz';
// 	let res = true;
// 	let strNew = '';
// 	for ( let value in str) {
// 		// console.log(new Set(string.toLowerCase().replaceAll(' ','').split('').sort()).has(str[value]));
// 		// string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')
// 		// if (new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).has(str[value]) === false) {
// 		// console.log(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split(''));
// 		// console.log(str[value]);
// 		// string = string.toString();
// 		// console.log(string);

// 		// string = string.toLowerCase();
// 		// console.log(string);
// 		// strNew = string.split('');
// 		// console.log(strNew);
// 		// console.log(value);
// 		// string = string.replaceAll(' ','');
// 		// console.log(string);
// 		// if (new Set(string.toString().toLowerCase().replaceAll(' ','').split('').sort()).has(str[value]) === false) {
// 		// if (new Set(string.sort()).has(str[value]) === false) {			
// 		// 	res = false;
// 		// 	break;
// 		// }
// 	}
// 	// return new Set(string.toLowerCase().replaceAll(' ','')).size === 26 ? true : false;
// 	return res;
// }



// abcdefghijklmnoprstuvwxyz
// abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ

// function isPangram(string) {
    // const str = 'abcdefghijklmnoprstuvwxyz';
	// let strNew = string.toLowerCase().replaceAll(' ','').split('').sort();
	// let res = true;
	// for ( let value in str) {
	// 	if (new Set(strNew).has(str[value]) === false) {
	// 		res = false;
	// 		break;
	// 	}
	// }
	// return res;
	// const str = 'abcdefghijklmnoprstuvwxyz';
	// let strNew = string.toLowerCase();

// 	let strNewSecond = strNew.replaceAll("","");
	// let strNewThird = strNew.split("").sort();

	// let res = true;
	// for ( let value in str) {
	// 	if (new Set(string.toLowerCase().split('').sort()).has(str[value]) === false) {
	// 		res = false;
	// 		break;
	// 	}
	// }
	// return res;

function isPangram(string) {	
	const str = 'abcdefghijklmnoprstuvwxyz';
	let res = true;
	for ( let value in str) {
		if (new Set(string.toLowerCase()).has(str[value]) === false) {
			res = false;
			break;
		}
	}
	return res;
}



function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}


function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}


function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }
      
        return false
    }
    
    return true
}


function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}


function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('abcHello world'));
console.log(isPangram('435345 354'));
console.log(isPangram('abcdefghijklmnoprstuvwxyABCDEFGHIJKLMNOPQRS1TUVWXYZ'));














	// let res = false;
	// let strSize = 0;
	// const alpSize = new Set('abcdefghijklmnopqrstuvwxyz').size;
	// console.log(alpSize);
	// console.log(string.toLowerCase().replaceAll(' ',''));
	// str = Array.from(new Set(str));
	// strSize = new Set(string.toLowerCase().replaceAll(' ','')).size;
	// sort().toString()
	// str = string.includes(string, 'a');
	// console.log(strSize);
	// return new Set(string.toLowerCase().replaceAll(' ','')).size === new Set('abcdefghijklmnopqrstuvwxyz').size ? true : false;
	// return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
	// return new Set(string.toLowerCase().replaceAll(' ','')).size === 26 ? true : false;
	// console.log(string.toLowerCase().replace(/[^a-z]/gi, '').split(''));