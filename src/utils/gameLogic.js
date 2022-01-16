const data = {
  Pets: ['Dog', 'Cat', 'Bat'],
  Salary: ['10k', '50k', '100k'],
  Spouse: ['A', 'B', 'C'],
}

// expectedData = {
//   Pets: ['Bat'],
//   Salary: ['100k'],
//   Spouse: [ 'C'],
// }

const number = 5;

const dataArrays = Object.values(data);

const doTheThing = (arrayToFilter) => {
  let newArr = [];
  newArr = arrayToFilter.map((arr, idx) => {
    if(arr.length > 1) {
      return arr.filter((item, idx) => {
        if(!(idx === (number - 1) || idx % number == 0)) {
          return item
        }  
      })
    }
  })
  if(arrayToFilter.filter((arr) => arr.length > 1).length > 1) {
    return doTheThing(newArr)
  } else {
    return arrayToFilter;
  }
} 

doTheThing(dataArrays)
