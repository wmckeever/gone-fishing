const prompt = require('prompt-sync')({sigint: true});

//<================= global variables=================>//
let caughtFish = []; // whever we catch a fish it will be added to this array


//<================= game flow =================>//
console.log("You've gone pokemon hunting! Try to maximize the value of your caught pokemon. You can catch pokemon for six hours (till 12:00pm) but you can catch at most, 10 lbs of pokemon.");


//simulate turns. The user only has six(6) turns per game. The for loop insures that it runs for 6 turns.
// for every turn list total number of fish and total weightin value
//

let i = 0;


for(let i = 6; i < 12; i++){
    console.log('==========================================\n');
    console.log(`The time is ${i}:00am. So far you've caught:`);
    console.log(`${caughtFish.length} pokemon, weighing: ${getTotalWeight()} lbs, and all valued at: $${getTotalValue()}\n`)


    let fish = generateRandomFish(); // catch first pokemon & stores it in the variable. Otherwise it will create a new fish/pokemon EVERY TIME.


    //  -check to see if weight will exceed 10lbs, is so - auto-release, make them press enter, make usre that they aren't prompted to catch/release.
    
    
     // this takes in total weight plus the weight of the new fish/pokemon

    console.log(`You caught a ${fish.name} pokemon weighing ${fish.weight} lbs and valued at $${fish.value}.\n`);
    console.log('Your action: catch [c] or release your pokemon? [r]?\n')
    

    let currentTotalWeight = getTotalWeight();

      if(currentTotalWeight + fish.weight > 10){
      console.log('This pokemon will put you over your 10lb catch limit, so you release it.\n')
      console.log('Press [enter] to continue.\n')
      prompt('> ')
      continue; // continue stops you from continuing further and starts you back at your for loop.       

      }

      

            let action = prompt('> ');

        while(action !== 'c' && action !== 'r'){
              console.log('Please enter either [c] or [r]')
              action = prompt('> ')
              }
        
                if(action === 'c'){
              caughtFish.push(fish);
              console.log(`\nYou chose to keep the ${fish.name}!\n`)
               }else if(action === 'r'){
              console.log(`\nYou chose to release the ${fish.name}!\n`)
        }

      }

//<================= End Game Summary =================>//
        console.log(`The time is ${i}:00pm. Time's up!\n`);
        console.log(`You caught ${caughtFish.length} pokemon:`);
        
        for(let i = 0; caughtFish.length > i; i++) {
            console.log(`${caughtFish[i].name}, ${caughtFish[i].weight} lbs, $${caughtFish[i].value}.`);
            
          }
          console.log(`Your Total pokemon weight: ${getTotalWeight()}`);
          console.log(`Your Total pokemon value: ${getTotalValue()}`);


        

 
        // console.log('The time is ${i}:00pm. Your time is up!');
        // console.log(`\nSo far you have caught ${caughtFish.length} pokemon:\n`);
        // console.log(`${caughtFish}\n`);
        
        // console.log(`Total pokemon weight: ${getTotalWeight} lbs`)
        // console.log(`Total pokemon value: ${getTotalValue} lbs`)









//<================= FUNCTIONS =================>//

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
      value = "$" + Number((Math.random() * 5).toPrecision(3));
     } 
        if(value < 1){
        value = Number(value.toPrecision(2));
        } 
        return value;
}

//////////////////////////////////////////

function generateRandomName(){
 
  let rarity = ['Epic:', 'Rare:','Common:', 'UnCommon:', 'Super Epic:', 'Super-Rare:', 'Basic:', 'Unknown:'];

  let adjectives = ['Shiny', 'Red','Dull', 'Blue', 'Slimy', 'Green', 'Dry', 'Yellow', 'Vibrant', 'Purple', 'Floppy', 'Orange', 'Silly', 'Silver']; 

  let types = ['Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon','Charizard','Squirtle', 'Wartortle', 'Blastoise', 'Pikachu', 'Metapod','Evee'];
  


let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
let type = types[Math.floor(Math.random() * types.length)];
let kind = rarity[Math.floor(Math.random() * rarity.length)];

while(adj1 === adj2){
  adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
}

return kind + " " + adj1 + " " + "&" + " " + adj2 + " " + type;
}

//////////////////////////////////////////

function generateRandomFish(){
    let fish = {};
    fish.name = generateRandomName();
    fish.weight = generateRandomWeight();
    fish.value = generateRandomValue();
/////
    return fish;
}
//////////////////////////////////////////

// trying to total the weight of ALL caught fish
function getTotalWeight(){
  //variable to keep track of value
  let totalWeight = 0;
// loop that will go through every fish in the array
for(let i = 0; i < caughtFish.length; i++){ // loop to go through each fish
      currentFish = caughtFish[i];
      totalWeight += currentFish.weight;
    }
  return Number(totalWeight.toPrecision(3))
    
  }


  
      
//////////////////////////////////////////
 
function getTotalValue(){
  //variable to keep track of value
  let totalValue = 0;
// loop that will go through every fish in the array
  for(let i = 0; i < caughtFish.length; i++){ // loop to go through each fish
  currentValue = caughtFish[i];
  totalValue += currentValue.value;
// }
    for(let fish of caughtFish){
// need to access the value of the fish in the for of loop
// our fish.value - gets us the value property of each fish in our caught fish array 1 at a time. 
      totalValue = totalValue + fish.value;
    } 
  return Number(totalValue.toPrecision(3));
  }
}



//   ;
// }



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
