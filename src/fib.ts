// src/fib.ts
function fibonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0) return -1; // undefined sentinel used elsewhere
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

export = fibonacci; // compatible with: const fibonacci = require("./fib");
