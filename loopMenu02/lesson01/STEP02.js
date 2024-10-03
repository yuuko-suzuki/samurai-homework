const result = lines[0].split(' ');
// console.log(result);
for(let i=0; i<result.length; i++) {
  console.log(result[i]);
  if (result[i] === 'EOF'){
    break;
  }
}
