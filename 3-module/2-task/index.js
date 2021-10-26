let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  let filter=arr.filter(item =>(a <=item && item <=b));
  return filter;
};
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
