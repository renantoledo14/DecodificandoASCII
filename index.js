const codificar = require('./codificar')
const decodificar = require('./decodificar')

const str = 'Bom Dia'
const { strEncode, chave } = codificar(str)
const strDecode = decodificar(strEncode, chave)

console.log(`String = ${str}`)
console.log(`String Codificada = ${strEncode}`)
console.log(`String Descodificada = ${strDecode}\n\n`)

