const arr = [1, 5, 3, 4, 2, 6];

//////////////////SOME//////////////////////////

function someValue(element, index, array) {
  return element > 1;
}

function some(array, predicate, thisArg) {
  for (let i = 0; i < array.length; i++) {
    if (
      thisArg
        ? predicate.call(thisArg, array[i], i, array)
        : predicate(array[i], i, array)
    ) {
      return true;
    }
  }
  return false;
}

console.log(some(arr, someValue));



//////////////////FILTER//////////////////////////

function fileterValue(element, index, array) {
  return !index || array[index - 1] < element;
}

function filter(array, predicate, thisArg) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (
      thisArg
        ? predicate.call(thisArg, array[i], i, array)
        : predicate(array[i], i, array)
    ) {
      result.push(array[i]);
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
