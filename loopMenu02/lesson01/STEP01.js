const result = lines[0].split(' ').map(str => parseInt(str, 10));
for (let i = 0; i < result.length; i++) {
  console.log(result[i]); // すべての数値を出力（-1を含む）
  if (result[i] === -1) {
    break; // -1が見つかったらループ終了
  }
}
