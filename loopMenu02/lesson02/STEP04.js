const result = lines[0].split(' ').map(str => parseInt(str, 10));
// console.log(result);
let counter = 0;
while(result[0]%result[1] === 0) {
  result[0] /= result[1];
  counter++;
}
console.log(counter);
