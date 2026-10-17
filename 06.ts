function example6(seed: number[], n: number): number[] {
  const result: number[] = []

  for (let i = 0; i < n; i++) {
    if (i < seed.length) {
      result.push(seed[i])
    } else if (i < 3) {
      result.push(0)
    } else {
      result.push(result[i - 1] + result[i - 2] + result[i - 3])
    }
  }

  return result
}

console.log(example6([1, 3, 5], 5))
console.log(example6([2, 2, 2], 3))
console.log(example6([10, 10, 10], 4))
console.log(example6([1], 6))
console.log(example6([], 5))
console.log(example6([1, 3, 5], 0))
