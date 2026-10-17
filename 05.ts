function example5(n: number): number {
  const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let result = 0

  while (n > 0) {
    counts[n % 10]++
    n = Math.floor(n / 10)
  }

  for (let digit = 9; digit >= 0; digit--) {
    while (counts[digit] > 0) {
      result = result * 10 + digit
      counts[digit]--
    }
  }

  return result
}

console.log(example5(3008))
console.log(example5(1989))
console.log(example5(2679))
console.log(example5(9163))
