var chocolateBars = ['snickers', 'hundred grand',
'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var array = [];
  return([element, ...array]);

}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return(array);
}

function addElementToEndOfArray() {
  var array = [1];
  return([...array, 'foo']);
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element)
 return(array);
}

function accessElementInArray(){
  const array = [1, 2, 3];
  return(array[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(){
  var array = [1, 2, 3];

  return(array.shift());

}
 function removeElementFromBeginningOfArray(){
   var array = [1, 2, 3];
   return(array.slice(1));
 }

 function destructivelyRemoveElementFromEndOfArray(){
   var array = [1, 2, 3];
   array.pop();
   return(array);
 }

 function removeElementFromEndOfArray(){
  var array = [1, 2, 3];
  return(array.slice(-1));

}
