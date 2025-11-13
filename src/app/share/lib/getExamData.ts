import { ArrayType } from "../types/data"

export function getExamData(data: string) {
  const arr = data.split('|').filter((v) => v).filter((v, i) => i > 5);
  const pakage = [];
  let temp: string[] = [];
  arr.map((v) => {
    if (v === '\n') {
      pakage.push(temp);
      temp = [];
      return;
    }
    temp.push(v);
  })
  pakage.push(temp);
  const result: ArrayType[] = pakage.map((v) => {
    return {
      word: v[0].trim(),
      mean: v[1].trim()
    }
  })
  console.log(result);
  return result
}