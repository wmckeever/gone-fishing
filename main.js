const prompt = require('prompt-sync')({sigint: true});

//<================= global variables=================>//
let caughtFish = []; // whever we catch a fish it will be added to this array
let fish1 = generateRandomFish();
let fish2 = generateRandomFish();

caughtFish.push(fish1, fish2);

console.log(caughtFish);
console.log(getTotalWeight());
console.log(getTotalValue());



//<================= game flow =================>//
// console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");


// simulate turns. The user only has six(6) turns per game. The for loop insures that it runs for 6 turns.
// for(let i = 6; i < 12; i++){
// console.log('==========================================\n');
//  console.log(`The time is ${i}:00am. So far you've caught:`);
//  console.log(caughtFish);




//  1. current fish list. We need a way - to keep track of our fish and print list
//  The time is 6:00am. So far you've caught: 0 fish, 0 lbs, $0.00
// -# of fish = .length of caughtFish
// -weight/value = function to calculate the total weight and total value of fish in caughtFish array. 


//  2. log out getRandomfish() - here we want to generate our random fish
//  You caught a 'Slimy Scaly Bass' weighing 0.24 lbs and valued at $3.12


//  3. Your action: [c]atch or [r]elease? > c -- user prompt
//}






//<================= main code flow-state =================>//













//console.log(generateRandomFish());



//<================= functions =================>//
/*


*/


function generateRandomWeight(){
  let weight = Number((Math.random() * 5).toPrecision(3));

  while(weight < 1){
  weight = Number((Math.random() * 5).toPrecision(3));
 } 

  return weight;
}

//////////////////////////////////////////

function generateRandomValue(){
  let value = Number((Math.random() * 5).toPrecision(3));

  while(value < 0.1){
    value = Number((Math.random() * 5).toPrecision(3));
   } 
  

  if(value < 1){
    value = Number(value.toPrecision(2));
   } 
  
   return value;
}

//////////////////////////////////////////

function generateRandomName(){
 
  let rarity = ['Epic', 'Rare','Common', 'UnCommon', 'Super Epic', 'Super Rare', 'Basic', 'Unknown'];

  let adjectives = ['Shiny', 'Red','Dull', 'Blue', 'Slimy', 'Green', 'Dry', 'Yellow', 'Vibrant', 'Purple', 'Floppy', 'Orange', 'Silly', 'Silver']; 

  let types = ['Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon','Charizard','Squirtle', 'Wartortle', 'Blastoise', 'Pikachu', 'Metapod','Evee'];
  


let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
let type = types[Math.floor(Math.random() * types.length)];
let kind = rarity[Math.floor(Math.random() * rarity.length)];

while(adj1 === adj2){
  adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
}

return kind + " " + adj1 + " " + "and" + " " + adj2 + " " + type;
}

//////////////////////////////////////////

function generateRandomFish(){
  let fish = {};
  fish.name = generateRandomName();
  fish.weight = generateRandomWeight();
  fish.value = generateRandomValue();

  return fish;
}
//////////////////////////////////////////

// trying to total the weight of ALL caught fish
function getTotalWeight(){
  // variable to keep track of weight
  let totalWeight = 0;
  
  // variable to keep track of fish
  let currentFish = 0; 

  
for(let i = 0; i < caughtFish.length; i++){ // loop to go through each fish
  currentFish = caughtFish[i];
  totalWeight += currentFish.weight;
}
return Number(totalWeight.toPrecision(3));
}

  
 
function getTotalValue(){
  
  let totalValue = 0;
  
  //let currentFish = 0; 

  for(let i = 0; i < caughtFish.length; i++){ // loop to go through each fish
  currentValue = caughtFish[i];
  totalValue += currentValue.value;
}
return Number(totalValue.toPrecision(3));
}










//<================= notes: =================>//
/*
-- FISH: (object)
    - weight -- number
    - name: (2 descriptors and a type) -- string
    - value -- number

fish = {
  name: string,
  weight: number,
  value: number
}
////////////////////////////////////////
WEIGHT:

Math.random()
weight - 0.00 
range: 0-5 (feel free to adjust!)

//Enzo's code -- creates a random number and gives it to a random decimal to the 10's place

-- code for value
console.log((Math.random() * 5).toPrecision(3));

let rand = Math.random() * 5;
console.log(rand);
console.log(Number(rand.toPrecision(3)));
--still need a way to offset decimals with 3 places, i.e. 0.574

-- Code for fish weight
console.logNumber(((Math.random() * 5).toPrecision(4)));
////////////////////////////////////////

VALUE:
Math.random() * 5).toPrecision(3));

////////////////////////////////////////

NAME:
  - 2 descriptors + 1 type -- (All strings)
 
  let adj = ['enormous, 'red', 'scaly']
  let type = ['salmon', 'bass', 'trout']

  Next we need to get a random item from the array
we need .length. We multiply Math.random by the length of the array. We also need to use Math.floor because we want to round DOWN to the 0 index in the array

Math.floor(Math.random() * type.length)

adj1 + adj2 + type -- we have to use .concat()

we need a check to make sure adj1 !== adj2
  -- if so, re-roll or re-randomize
  -- this is done in an if statement


*/
