const companies = [
  { Name: 'Company one', category: 'novel', start: 1989, end: 1991 },
  { Name: 'Company two', category: 'technology', start: 1987, end: 1998 },
  { Name: 'Company three', category: 'finance', start: 1986, end: 1990 },
  { Name: 'Company four', category: 'retail', start: 1986, end: 1990 },
  { Name: 'Company five', category: 'novel', start: 1987, end: 2000 },
  { Name: 'Company six', category: 'technology', start: 1989, end: 1992 },
  { Name: 'Company seven', category: 'management', start: 1987, end: 1998 },
  { Name: 'Company eight', category: 'finance', start: 1987, end: 1990 },
  { Name: 'Company nine', category: 'retail', start: 1984, end: 1991 },
];

const ages = [
  33, 31, 32, 30, 33, 31, 30, 32, 21, 13, 12, 13, 19, 20, 21, 37, 30,
];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach
// companies.forEach(function (company) {
//   console.log(company.Name);
// });
// filter

// let canDrink = [];
// for (let a = 0; a < ages.length; a++) {
//   if (ages[a] >= 21) {
//     canDrink.push(ages[a]);
//   }
// }

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

// Filter retail companies

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'retail') {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(
//   (company) => company.category === 'retail'
// );

// console.log(retailCompanies);

// get 80s companies
// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

// get companies lasted for more than 10years

// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

// map

// create array of company names

// const companyNames = companies.map(function (Company) {
//   return Company.Name;
// });

// const testMap = companies.map(function (company) {
//   return `${company.Name}[${company.start}-${company.end}]`;
// });
// const testMap = companies.map(
//   (company) => `${company.Name}[${company.start}-${company.end}]`
// );
// console.log(testMap);
// const agesSquare = ages.map((age) => Math.sqrt(age));

// const agesTimesTwo = ages.map((age) => age * 2);

// console.log(agesTimesTwo);

// const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(ageMap);

// sort
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);
// sort ages
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);
// reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum)

// get total year for ALL companies
// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );

// console.log(totalYears);

// combain methods
// const combained = ages
//   .map((ages) => ages * 2)

//   .filter((ages) => ages >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);
// console.log(combained);
