var total = 0;

function nestedAdd(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      if (Array.isArray(current)) {
        sum += nestedAdd(current);
      } else {
        sum += current;
      }
    }
    return sum;
}

console.log(nestedAdd([1, 2, [3, 1]]))
