const arr = [1, 2, 3];

//////////////////SOME//////////////////////////

function someValue(value) {
  return value > 1;
}

function some(array, predicate) {
  for (const el of array) {
    if (predicate(el)) {
      return true;
    }
  }
  return false;
}

console.log(some(arr, someValue));

// thisArg

const arrUser = [
  { user: 'John', score: 1 },
  { user: 'Mark', score: 2 },
  { user: 'Luka', score: 5 },
];

const validScore = {
  score: 5,
};

function greaterScore(el) {
  return el.score >= this.score;
}

function some(array, predicate, thisArg) {
  for (const el of array) {
    if (predicate.call(thisArg, el)) {
      return true;
    }
  }
  return false;
}

console.log(some(arrUser, greaterScore, validScore));

//////////////////FILTER//////////////////////////

function fileterValue(value) {
  return value > 1;
}

function filter(array, predicate) {
  let result = [];
  for (const el of array) {
    if (predicate(el)) {
      result.push(el);
    }
  }
  return result;
}

console.log(filter(arr, fileterValue));

// thisArg

const points = [2, 3, 4, 5];

const validation = {
  value: 3,
};

function filterUser(point) {
  return point >= this.value;
}

function filter2(array, predicate, thisArg) {
  let filtered = [];
  for (const el of array) {
    if (predicate.call(thisArg, el)) {
      filtered.push(el);
    }
  }
  return filtered;
}

console.log(filter2(points, filterUser, validation));

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
