let techs = ["html", "css", "js"]

techs.push("nodej") // adc ao último elemento do array
techs.unshift("sql"); // adc no começo do elemento
techs.pop() // remover do final
techs.shift() // remove do início do array

console.log(techs.slice(1, 3)) // cortar aonde quero no array
techs.splice() // remover itens no array

let index = techs.indexOf('css') // buscar a posição que se encontra o elemento
techs.splice(index, 1)
console.log(techs)