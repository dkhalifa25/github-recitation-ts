// src/fib.ts
// Return the n-th Fibonacci number.
// For invalid n (negative or non-integer), return -1 so the route can say "undefined".
export default function fibonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0) return -1;

  // Iterative (avoids recursion blowups) and keeps typing strictly number.
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return a;
}
