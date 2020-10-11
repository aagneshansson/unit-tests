export const firstLast = (items) => {
  if (items.lenght ===0) {
    return 'No items!'
  }
  else if (items.lenght === 1) {
    return `Only item: ${items[0]}`
  }
  return `First: ${items[0]}, Last: ${items[1]}`
}
