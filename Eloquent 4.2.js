function reverseArray(array){
  var newArray = [];
  var n = array.length - 1;
  
  for (var i = 0; i < array.length; i++){
  newArray[i] = array[n];
  n--;  
  }
 return console.log(newArray);
}

function reverseArrayinPlace(array){
  var n = array.length - 1;
  var newArray = [];
  
  for (var i = 0; i < array.length; i++){
  newArray[i] = array[n];
  n--;  
  }
  
  for (var i = 0; i < array.length; i++){
  array[i] = newArray[i];
  }
  
  return console.log(array);
}

x = [1,2, 15 ,16, "x"];
reverseArray(x);
reverseArrayinPlace(x);