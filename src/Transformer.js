export default class Transformer {
  constructor (reader) {
    this.reader = reader
  }

  transform () {
    const line = this.reader.readLine()
    return Array.from(line).reverse().join('')
  }
}
