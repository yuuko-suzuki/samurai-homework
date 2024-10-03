const result = lines[0].split(' ').map(str => parseInt(str, 10)); 
let count=0;
while (result[0] <= result[2]) {
  result[0] += result[1];
  count++;
}
console.log(count);
