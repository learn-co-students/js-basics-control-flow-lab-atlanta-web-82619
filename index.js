function scuberGreetingForFeet(number){
  // Write your code here!
  let msg;
  if (number < 400) {
    msg = 'This one is on me!';
  }
  else if (number > 2500) {
    msg = 'No can do.';
  }
  else if (number > 2000) {
    msg = 'I will gladly take your thirty bucks.';
  }
  return msg;
}

function ternaryCheckCity(city){
  // Write your code here!
  let msg;

  msg = (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
  return msg;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let msg;
  switch (tip) {
    case ('generous'):
      msg = 'Thank you so much.';
      break;
    case ('not as generous'):
      msg = 'Thank you.';
      break;
    default:
      msg = 'Bye.';
      break;
  }
  return msg;
}