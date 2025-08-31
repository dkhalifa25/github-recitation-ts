// src/fibRoute.ts
import { Request, Response } from "express";
import fibonacci from "./fib";

export default function fibRoute(
  req: Request<{ num: string }>,
  res: Response
): void {
  const numStr = req.params.num;         // string
  const n = Number.parseInt(numStr, 10); // number

  const fibN = fibonacci(n);

  const result =
    fibN < 0
      ? `fibonacci(${numStr}) is undefined`
      : `fibonacci(${numStr}) is ${fibN}`;

  res.send(result);
}
