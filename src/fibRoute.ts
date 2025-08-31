// src/fibRoute.ts
// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

type RouteParams = { num?: string };
interface ReqWithNum extends Request {
  params: RouteParams;
}

export default (req: ReqWithNum, res: Response) => {
  const raw = req.params.num;

  // Accept integers, including negatives: -?\d+
  if (typeof raw !== "string" || !/^-?\d+$/.test(raw)) {
    return res
      .status(400)
      .send("`num` must be an integer in the path, e.g. /fib/8 or /fib/-2");
  }

  const n: number = parseInt(raw, 10);
  const fibN: number = fibonacci(n);

  const result: string =
    fibN < 0 ? `fibonacci(${n}) is undefined` : `fibonacci(${n}) is ${fibN}`;

  return res.send(result);
};