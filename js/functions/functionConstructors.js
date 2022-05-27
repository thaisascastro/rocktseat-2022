// Function() constructor
// expressãp new
// create new object
// this keyword

function Person(name) {
    this.name = name  
    this.walk = function() {
        return this.name + "está andando"
    } 
}

const thaisa = new Person("Thaísa")
const leandro = new Person("Leandro")
console.log(thaisa.walk())
console.log(leandro.walk())
