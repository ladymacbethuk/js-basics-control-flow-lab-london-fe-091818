// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  }
    if (distance > 2000 && distance < 2500) {
      return 'I will gladly take your thirty bucks.';
  }
    if (distance > 2500) {
      return 'No can do.';
  }
}

/*
function ternaryCheckCity() {;

switch (city) {
  case "NYC":
    console.log = 'Ok, sounds good.';
    break;
  default:
    console.log = 'No go.';
    break;
  }
}
*/

//ternaryCheckCity === "NYC" ? 'Ok, sounds good.' : 'No go.';



function switchOnCharmFromTip() {
  switch (tip) {
    case 'generous':
      console.log('Thank you so much.');
      break;
    case 'not generous':
     console.log('Thank you.');
      break;
    default:
      console.log('Bye.');
  }
}
