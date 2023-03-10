/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
    touristAttractions: ["British Museum", "Hyde Park"],
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

england = unitedKingdom[1].touristAttractions;
console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

unitedKingdom[2].capital = "Cardiff";
wales = unitedKingdom[2].capital;
console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */
northernIrelandKeys = Object.keys(unitedKingdom[3]);
console.log(northernIrelandKeys);
/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */
// checking between Scotland and England
if (unitedKingdom[0].population === unitedKingdom[1].population ) {
  console.log("scotland has a similar population to England");
} else if (unitedKingdom[0].population >  unitedKingdom[1].population) {
 console.log("Scotland is bigger than England");
} else {
  console.log("Scotland is smaller than England");
}

// checking between Scotland and Wales
if (unitedKingdom[0].population === unitedKingdom[2].population ) {
  console.log("Scotland has a similar population to Wales");
} else if (unitedKingdom[0].population >  unitedKingdom[1].population) {
 console.log("Scotland is bigger than Wales");
} else {
  console.log("Scotland is smaller than Wales");
}

// checking between Scotland and Nothern Ireland
if (unitedKingdom[0].population === unitedKingdom[3].population ) {
  console.log("Scotland has a similar population to Nothern Ireland ");
} else if (unitedKingdom[0].population >  unitedKingdom[1].population) {
 console.log("Scotland is bigger than Nothern Ireland");
} else {
  console.log("Scotland is smaller than Nothern Ireland");
}

// could of used a for loop aswell