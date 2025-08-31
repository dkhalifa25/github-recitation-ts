import { Request, Response } from "express";
const fibonacci = require("./fib");

export default (req: Request<{ num: string }>, res: Response) => {
  const num = req.params.num; // num is now string
  const fibN = fibonacci(parseInt(num, 10));

  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
