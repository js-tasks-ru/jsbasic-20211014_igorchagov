function getMinMax(str) {
  let arr = str.split(' ').map(Number);
arr = arr.filter(x => !Number.isNaN(x));
console.log(arr);
  let result ={ 
  'min':'' ,
  'max': '',
  };
  result['min'] = Math.min.apply(0, arr);
  result['max'] = Math.max.apply(0, arr);
  return result;
};
