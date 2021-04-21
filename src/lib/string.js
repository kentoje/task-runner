const capitalize = (word) =>
  word
    .split('')
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join('')

export { capitalize }
