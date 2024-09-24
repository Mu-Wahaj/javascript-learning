//    parctice questions
// No ! remove a company name from first

let companies = [
  "Microsoft",
  "Meta",
  "SpaceX",
  "Tesla",
  "uber",
  "Amazon",
  "NVidia",
];

console.log(companies);

companies.shift();
console.log(companies);

// Q NO 2 remove uber and add bloomberg

let company = [
  "Microsoft",
  "Meta",
  "SpaceX",
  "Tesla",
  "uber",
  "Amazon",
  "NVidia",
];

company.splice(4, 1, "bloomberg"); // uber will remove and bloomberg will appaer
console.log(company);
// Q NO 3 add amazon at the end

company.push("AMAZON");
console.log(company);
