export function copyWord(word, times) {
  return word.repeat(times)
}

export function copyWordWithCB(word, times, callback) {
  callback(word.repeat(times))
}
