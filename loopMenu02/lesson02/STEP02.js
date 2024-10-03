const N = lines[0];
const result = lines[1].split(' ').map(str => parseInt(str, 10));
for(let i=0; i<N; i++){
  //   console.log(result[i]);
  //   console.log(i+1);
  num = result[i]*(i+1);         //ここの（）を忘れていた！
  console.log(num);
}
