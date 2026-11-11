function example4t(value: string | number): string | number {
  if (typeof value === "number") {
    const table: [number, string][] = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"]
    ]
    let result = ""

    for (let i = 0; i < table.length; i++){
      while (value >= table[i][0]) {
        result += table[i][1]
        value -= table[i][0]
      }
    }

    return result
  }

  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0

  for (let i = 0; i < value.length; i++) {
    const current = values[value[i]]
    const next = i + 1 < value.length ? values[value[i + 1]] : 0
    if (current < next) {
      result -= current
    } else {
      result += current
    }
  }
      return result 
}

console.log(example4t(1989))
console.log(example4t(2000))
console.log(example4t(68))
console.log(example4t(109))

console.log(example4t("MCMLXXXIX"))
console.log(example4t("MM"))
console.log(example4t("LXVIII"))
console.log(example4t("CIX"))