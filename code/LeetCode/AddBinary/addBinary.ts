// 67. Add Binary

// Q. Given two binary strings a and b, return their sum as a binary string.

function addBinaryTS(a: string, b: string): string {
  const aBin: string = `0b${a}`;
  const bBin: string = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
}
