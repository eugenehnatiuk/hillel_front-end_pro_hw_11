const arr = [1, 2, 3];

//////////////////SOME//////////////////////////

function someValue(value) {
  return value > 1;
}

function some(array, predicate, thisArg) {
  for (const el of array) {
    if (thisArg ? predicate.call(thisArg, el) : predicate(el)) {
      return true;
    }
  }
  return false;
}

console.log(some(arr, someValue));

//////////////////FILTER//////////////////////////

function fileterValue(value) {
  return value > 1;
}

function filter(array, predicate, thisArg) {
  const result = [];
  for (const el of array) {
    if (thisArg ? predicate.call(thisArg, el) : predicate(el)) {
      result.push(el);
    }
  }
  return result;
}

console.log(filter(arr, fileterValue));

//////////////////REDUCE//////////////////////////

function sum(previousValue, currentValue) {
  return previousValue + currentValue;
}

function reduce(array, predicate, initialValue) {
  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  } else if (array.length === 0 && initialValue !== undefined) {
    return initialValue;
  }

  let accumulator;
  let currentIndex;

  if (initialValue === '') {
    accumulator = initialValue;
    currentIndex = 0;
  } else if (initialValue) {
    accumulator = initialValue;
    currentIndex = 0;
  } else {
    accumulator = array[0];
    currentIndex = 1;
  }

  for (let i = currentIndex; i < array.length; i++) {
    accumulator = predicate(accumulator, array[i]);
  }

  return accumulator;
}

console.log(reduce(arr, sum, 0));
