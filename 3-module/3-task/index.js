let str='background-color';
function camelize(str) {
  let str1 = str.split('-');
  let str2 = str1.map(
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  let str3 = str2.join(''); 
  return str3;
};
let a = camelize(str);
console.log(a);
