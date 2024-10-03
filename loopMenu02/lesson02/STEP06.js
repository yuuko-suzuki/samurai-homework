const result = lines[0].split(' ').map(str => parseInt(str, 10));  
// NをM進数に変換して出力
console.log(result[0].toString(result[1]));
