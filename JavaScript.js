var randomTreasure = Math.floor(Math.random() * 9)
var randomTroll = Math.floor(Math.random() * 9)
console.log(randomTreasure, randomTroll);

  if (randomTreasure === randomTroll){
   var randomTreasure = Math.floor(Math.random() * 9)
 }

const treasure = (location) => {
  if (randomTreasure === location) {
    document.getElementById (location).innerHTML="👑"
  }
  else if (randomTroll === location) {
    document.getElementById (location).innerHTML="🎶"
  }
  else if (randomTreasure !== location && randomTroll !== location){
    document.getElementById (location).innerHTML="👀"
  }
  }
  // else if (location === 1) {
  //   document.getElementById (1).innerHTML="👑"
  // }
  // else if (location === 2) {
  //   document.getElementById (2).innerHTML="👑"
  // }
  // else if (location === 3) {
  //   document.getElementById (3).innerHTML="👑"
  // }
  // else if (location === 4) {
  //   document.getElementById (4).innerHTML="👑"
  // }
  // else if (location === 5) {
  //   document.getElementById (5).innerHTML="👑"
  // }
  // else if (location === 6) {
  //   document.getElementById (6).innerHTML="👑"
  // }
  // else if (location === 7) {
  //     document.getElementById (7).innerHTML="👑"
  // }
  // else if (location === 8) {
  //   document.getElementById (8).innerHTML="👑"
  // }
  // else if (location === 9) {
  //   document.getElementById (9).innerHTML="👑"
  //   //   alert("You find the Treasure, you win!!!!!" + ${location})
    // }  else if (randomTroll === location) {
    //   alert("You find the Troll,  you Lose......" + ${location})
    //   document.getElementById(location).innerHTML= "&#x2620"
    // } else{
    //   alert("You find nothing, continue...." )
    //   document.getElementById(location).innerHTML= "&#x1f332"
