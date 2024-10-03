const result = lines[0].split('').map(str => parseInt(str, 10));
//console.log(result); 
let total = result.reduce(function(sum,element) {
  return sum + element;
}, 0);
console.log(total);
