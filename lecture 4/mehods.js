
//  pop(), push( )  methods 


let friutes =[
    "apple",
    "banana",
    "strawberry",
    "mango",
    "lichi",
]
console.log(friutes);
friutes.push("blueberry");
console.log(friutes);
 let deletedItem=friutes.pop("lichi");
 console.log(friutes);
document.write(`deleted item ${deletedItem} <br/>`);



// converting array to string by uing tostrind method

let frts =[
    "apple",
    "banana",
    "strawberry",
    "mango",
    "lichi",
]
console.log(frts);
// convert in string
let string = frts.toString();

console.log(`after being string <br/> ${string}`);
console.log(typeof(string));



// concat Array


let heroesMarvel =[
    "iron man",
    "spider man",
    "ant man",
    "capton amrica ",
    " the mavels ",
    "thor ",
]
let DCHeroes =[
    "super man",
    "wonder women ",
    "bat man",
]
let pakHero =[
          " NUSRAT FATIH ALI KHAN",
          "Tariq Jameel",
          "ALLAM IQBAL",
]

let hero = heroesMarvel.concat(DCHeroes,pakHero);

console.log(hero);


// shift and unshift methods

let outFit =[
    "shirt",
    "pant",
    "belt",
    "shoes",
]

document.write(` outFit products <br/> ${outFit}<br/>`);

outFit.unshift("cop");
document.write(outFit);

let deleted = outFit.shift();
document.write(`<br/>${outFit}`);
document.write(` <br/> deleted value ${deleted}`);



// slice and aplice method

  let footbalPlayers =[
    "Ronaldo",
    "Messi",
    "NEymar",
    "Mbappe",
    "Bellongham",
    "Phoden",
    "Modric",
  ]

  console.log(footbalPlayers);

  let Players = footbalPlayers.slice(3,5);

  console.log (Players);
   footbalPlayers.splice(1,2,"GOAT");
  console.log(footbalPlayers);
