import Reader from './Reader.js'
import Transformer from './Transformer.js'
import lipsum from './lipsum.js'

const myBook = new Reader(lipsum)
const myTransformer = new Transformer(myBook)

console.log(myTransformer.transform())
