var bin = ["3","1","1"];

function every(array, test){
  var evaluation = false;
  for ( items in array){
  if(test(bin[items]))
    evaluation = true;
  else{
     return false;
     break;
   }
  }
  return evaluation;
}

function some(array, test){
  var evaluation = [];
  for ( items in array){
  var i = 0;
  if(test(array[items]))
    return true;
  }
    return false;
}

function isBiggerThan10(element, index, array) {
  return element > 10;
}


some(bin, isBiggerThan10);