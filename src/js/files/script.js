// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
// let employersNames = [];

// function convertData() {
// 	for (let i = 0; i < employers.length; i++) {
// 		let elem = employers[i];
// 		if (elem.length > 0 && elem.length != '') {
// 			employersNames.push(elem.toLowerCase().trim());
// 		}
// 	}
// 	employersNames = employersNames.map(item => `${item[0].toUpperCase()}${item.slice(1)}`);
// }
// convertData();

// const sponsors = {
// 	cash: [40000, 5000, 30400, 12000],
// 	eu: ['SRL', 'PLO', 'J&K'],
// 	rus: ['RusAuto', 'SBO']
// };

// function calcCash(everyCash, own = 0) {
// 	let total = 0;
// 	everyCash.forEach(el => {
// 		total += el;
// 	});
// 	return total;
// }

// const money = calcCash(sponsors.cash);

// function makeBusiness(owner, cash, emp, director = 'Victor') {
// 	const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
// 	console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp.join(', ')}`);
// 	console.log('And we have a sponsors: ');
// 	console.log(`${sumSponsors.join(' ')}`);
// 	console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
// }
// makeBusiness('Sam', money, employersNames);

// var employersNames = [];
// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }
// for (var i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }

// var sponsors = {
// 	cash: [40000, 5000, 30400, 12000],
// 	eu: ['SRL', 'PLO', 'J&K'],
// 	rus: ['RusAuto', 'SBO']
// };

// function calcCash(own) {
// 	own = own || 0;
// 	var everyCash = Array.prototype.slice.call(arguments);
// 	var total = own;
// 	for (var i = 0; i < everyCash[1].length; i++) {
// 		total += +everyCash[1][i];
// 	}
// 	return total;
// }

// var money = calcCash(null, sponsors.cash);

// function makeBusiness(owner, director, cash, emp) {
// 	director = director || 'Victor';
// 	var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
// 	console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
// 		emp);
// 	console.log('And we have a sponsors: ');
// 	console.log.apply(null, sumSponsors);
// 	console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
// }
// makeBusiness.apply(null, ['Sam', null, money, employersNames]);