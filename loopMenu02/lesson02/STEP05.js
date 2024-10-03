const N = parseInt(lines[0]);

function toBinaryNumber(n) {
  if (n === 0) return '0';
  let binary = '';
  while (n > 0) {
    binary = (n % 2) + binary; // 剰余を前に追加
    n = Math.floor(n / 2);     // 商を計算
  }
  return binary;
}
console.log(toBinaryNumber(N));
