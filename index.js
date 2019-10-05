function scuberGreetingForFeet(num){
  let result 
  if (num <= 400)
  {result = 'This one is on me!'}
  else if (num > 2500)
  {result = 'No can do.'}
  else {result = 'I will gladly take your thirty bucks.'}


  return result
  // Write your code here!
}

function ternaryCheckCity(city){
  var result = (city === 'NYC') ? "Ok, sounds good." : "No go."
  return result
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
      default:
        return 'Bye.';


    





  }

}