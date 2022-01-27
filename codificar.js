
function codificar(str) {

	str = str.toString()
	let strEncode = ''
	let chave = []

	str.split('').forEach(letra => {
		strEncode += letra.charCodeAt(0)
		chave.push(letra.charCodeAt(0).toString().length)
	})
	chave = chave.join(',')
	strEncode = strEncode.split('').reverse().join('')

	return { strEncode, chave }
}

module.exports = codificar