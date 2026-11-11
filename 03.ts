function autocomplete(search: string, items: string[], maxResult: number): string[] {
  const query = search.toLowerCase()
  const prefix: string[] = []
  const interior: string[] = []
  const suffix: string[] = []

  for (const item of items) {
    const word = item.toLowerCase()

    if (word.startsWith(query)) {
      prefix.push(item)
    } else if (word.includes(query)) {
      if (word.endsWith(query)) {
        suffix.push(item)
      } else {
        interior.push(item)
      }
    }
  }

  return [...prefix, ...interior, ...suffix].slice(0, Math.max(0, maxResult))
}

console.log(autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2))



