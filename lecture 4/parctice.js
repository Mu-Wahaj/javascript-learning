

// paractice exercise
// using for loop
let grades = [
    45,67,89,90,45,
];
let sum =0;
for(let i =0 ;i<grades.length;i++){
    console.log(grades[i]);
sum =sum+grades[i];
}
console.log(`sum is equal to ${sum}`);
let average = sum/grades.length;
console.log(`the average is equal to ${average}`);

//   using for of loop

let marks = [
    45,67,89,90,45,
];
let sm=0
for(let val of marks){
    document.write(`${val} <br/>`)
    sm +=val;
}
let avg = sm/marks.length;

document.write(`som is equal to ${sm} <br/> `);
document.write(`your average is equal to = ${avg} <br/>`);



//  practice q No 2 

// using for of loop

let price =[
    250,77,890,667,454,1120,905
];
 let z=0;
for(let val of price){
    console.log(    `price of index ${z}=${val}`);
    let offer = val / 10;
    price[z]=  price[z]-offer;
    console.log(`price after offer = ${price[z]}`);
  z++;
}


// using for loop


let rate = [
    250,77,890,667,454,1120,905
];

for(let a=0; a<rate.length;a++){
    document.write(`${rate [a]} <br/>`);
let off = rate[a]/10;
rate[a]= rate[a]- off;
document.write(`after offer price is =${rate[a]}<br/>`);
}