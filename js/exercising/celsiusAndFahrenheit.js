function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'
}

try {
  transformDegree('50F')
  transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}