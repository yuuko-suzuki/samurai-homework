const result = lines[1].split(' ');
for(let i=0; i<result.length; i++) {
  if (result[i]%3 === 0 ){
    console.log(result[i]);
  }
}
