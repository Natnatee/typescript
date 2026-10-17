function example1(s: string): boolean {
  const dict: Record<string, string> = { "(": ")", "{": "}", "[": "]" }
  const stack: string[] = []

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(dict[char])
    } else if (stack.pop() !== char) {
      return false
    }
  }

  return stack.length === 0
}

console.log(example1("()"))
console.log(example1("([]]"))
console.log(example1("([{}])"))
console.log(example1("([[{}]]]"))
console.log(example1(")"))
console.log(example1("(]}])"))
console.log(example1("([)]"))
console.log(example1("{"))
console.log(example1(""))
