let person = {
  name: 'Thaísa',
  age: 22,
  weight: 64
}

for (let property in person ) {
  console.log(property)
  console.log(person[property])
}