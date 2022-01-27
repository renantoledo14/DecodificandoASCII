
function decodificar(str = '', chave = '') {
	
	if (chave === '' && str !== '') {
		console.log('Erro: Chave vazia')
		return false
	}
	else if (chave !== '' && str === '') {
		console.log('Erro: String vazia')
		return false
	}

	chave = chave.toString().split(',')
	str = str.toString().split('').reverse().join('')

	let strDecode = ''
	let pos = 0

	chave.forEach(tam => {
		tam = parseInt(tam)
		let num = str.substr(pos, tam)
		strDecode += String.fromCharCode(num)

		pos += tam
	})

	return strDecode
}

module.exports = decodificar