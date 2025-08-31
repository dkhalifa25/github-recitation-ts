// src/fib.ts
// Typed utility function to compute Fibonacci numbers

export default function fibonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0) return -1;

  // Iterative implementation avoids recursion depth issues
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    const next: number = a + b;
    a = b;
    b = next;
  }

  return a;
}