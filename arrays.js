var chocolateBars = ['snickers', 'hundred grand',
'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var array = [1];
  return(['foo', ...array]);

}

function destructivelyAddElementToBeginningOfArray(){
  var array = [1];
  array.unshift('foo');
  return(array.unshift('foo'));
}

function addElementToEndOfArray() {
  var array = [1];
  return([...array, 'foo']);
}

function destructivelyAddElementToEndOfArray() {
 var array = [1]
 array.push('foo');
 return(array.push('foo'));
}

function accessElementInArray(){
  const array = [1, 2, 3];
  return(array[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(){
  const array = [1, 2, 3];
  return(array.shift(0));
}
 function removeElementFromBeginningOfArray(){
   const array = [1, 2, 3];
   array.slice(0);
   return(array.slice(1));
 }

 function destructivelyRemoveElementFromEndOfArray(){
   var array = [1, 2, 3];
   array.pop(2);
   return(array.pop(2));
 }

 function removeElementFromEndOfArray(){
  var array = [1, 2, 3];
  array.slice(0, array.length - 1)
  return(array);

}
