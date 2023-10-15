/* 
    String and some methods
    - 1: lenght: Return size
    - 2: concat:
    - 3: substring(start[int], finish[int]):
    - 4: indexOf():
    - 5: replace():
    - 6: split():
    - 7: concat():
    - 8: slice():
    - 9: trim:
    -10: toUpperCase() and toLowerCase()
*/

let longText = `Para uma rua inacessível a todos os pensamentos,
Real, impossivelmente real, certa, desconhecidamente certa,
Com o mistério das coisas por baixo das pedras e dos seres,
Com a morte a pôr umidade nas paredes e cabelos brancos nos homens,
Com o Destino a conduzir a carroça de tudo pela estrada de nada.`

// Good methods
let totalLenght = longText.length
console.log(totalLenght, `\n`)

let newText = longText.concat(" SEM TEMPO IRMAO")
console.log(newText, `\n`)

let subText = longText.substring(0,4)
console.log(subText, `\n`)

let searchText = longText.indexOf("uma")
console.log(searchText, `\n`)

let replaceText = longText.replace("," ," RAMBO PAPAE")
console.log(replaceText, `\n`)

let splitText = longText.split(',')
console.log(splitText,`\n`)

let trimText = longText.trim()
console.log(trimText,`\n`)

let upperText = longText.toUpperCase()
console.log(upperText)