export default class Reader {
  constructor (data, delimiter = '.') {
    this.data = data
    this.delimiter = delimiter
    this.currentLine = 0
  }

  readLine () {
    const nextLine = this.data.indexOf(this.delimiter, this.currentLine)
    let sub = null
    if (nextLine > -1) {
      sub = this.data.substring(this.currentLine, nextLine)
      this.currentLine = nextLine
    }
    return sub
  }
}
