'use strict';

const playerCount = {
  soccer: 11,
  baseball: 9,
  hockey: 6,
  addSport(sport) {
    this[sport] = 99;  //add sport with default player count: 99
  },
};

const showCountOrAddSport = function (sportName) {
  return playerCount[sportName] || playerCount.addSport(sportName);
};

// const showCountOrAddSport = function (sportName) {
//   if (playerCount[sportName]) {
//     return playerCount[sportName];
//   } else {
//     playerCount.addSport(sportName);
//   };    
// };

console.log(showCountOrAddSport("soccer"));

showCountOrAddSport("volleyball");
console.log(playerCount);






