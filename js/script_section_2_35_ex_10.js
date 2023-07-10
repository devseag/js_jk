'use strict';

const personalPlanPeter = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['fr', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
	showAgeAndLangs: function (plan) {
		const {age} = plan;
		const {languages} = plan.skills;
		let str = `I am ${age} and can speak: `;
		// for ( let key of languages) {
		// 	str +=  `${key.toUpperCase()} `;
		// }
		languages.forEach(function(lang){
			//console.log(`${item.toUpperCase()}`);
			//console.log(str);
			str += `${lang.toUpperCase()} `;
			//console.log(str);
		});
		return str;
	}
};

function showExperience(plan) {
	const {exp} = plan['skills'];
	// console.log(exp);
	// return plan['skills']['exp'];
	return exp;
}

//showExperience(personalPlanPeter);
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let text = '';
	const {programmingLangs} = plan.skills;
	for ( let key in programmingLangs ) {
		text += `Lang ${key} is studied on ${programmingLangs[key]}\n`;
	}
	return text;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));