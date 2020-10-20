const array = [9,5,6,4,3,7,2,1,8];
//map
console.log(array.map(x => x*5));
//filter
console.log(array.filter(x => x >= 5));
//reduce
console.log(array.reduce((total, amount) => total + amount, 0));
//map, filter and reduce
console.log(array.map(x => x*5)
  .filter(x => x >= 5)
  .reduce((total, amount) => total + amount, 0));
//merge sort
function mergeSort(array) {
  if(array.length <= 1){
    return array;
  }
  const halfPoint = Math.floor(array.length/2);
  const leftSide = array.slice(0, halfPoint);
  const rightSide = array.slice(halfPoint);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}
function merge(leftSide, rightSide){
  const arr = [];
  while(leftSide.length && rightSide.length){
    if(leftSide[0] > rightSide[0]){
      arr.push(rightSide.shift())
    } else {
      arr.push(leftSide.shift())
    }
  }
  return arr.concat(leftSide.slice()).concat(rightSide.slice());
}
console.log(mergeSort(array));
//quick sort
function quickSort(array){
  if(array.length <= 1){
    return array;
  }
  const pivot = array[0];
  const GreaterThan = [];
  const LessThan = [];
  for(let i = 1; i < array.length; i++) {
    if(array[i] > pivot) {
      GreaterThan.push(array[i]);
    }else{
      LessThan.push(array[i]);
    }
  }
  return quickSort(LessThan).concat(pivot, quickSort(GreaterThan));
}

console.log(quickSort(array));

const items = [
  {weight: 5, value: 160},
  {weight: 8, value: 190},
  {weight: 3, value: 137},
  {weight: 9, value: 210},
  {weight: 2, value: 130},
  {weight: 6, value: 175},
  {weight: 7, value: 170},
  {weight: 1, value: 100},
  {weight: 4, value: 145},
  {weight: 12, value: 330},
  {weight: 10, value: 300},
]
items.forEach((item) => {item.ValuetoWeight = item.value/item.weight});
items.sort((a,b) => (a.ValuetoWeight < b.ValuetoWeight ? 1 : -1));
const capacity = 15;
function knapsack(items, capacity){
  let itemsTaken = [];
  let totalWeight = 0;
  let ValueofTake = 0;
  for(let i = 0; i < items.length; i++){
    if(items[i].weight <= capacity - totalWeight){
      itemsTaken.push(items[i]);
      totalWeight += items[i].weight;
      ValueofTake += items[i].value;
    } else{
      break;
    }
  }console.log(itemsTaken, ValueofTake, totalWeight);
}
knapsack(items, capacity);