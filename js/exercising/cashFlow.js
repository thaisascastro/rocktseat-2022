let family = {
  incomes: [2500, 3200, 230, 240.54],
  expenses: [320.56, 60.65, 190.90, 900]
}

function sum(array) {
  let total = 0

  for(let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateIncoes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncoes - calculateExpenses
  
  const itsOk = total >= 0
  let balanceText = "Negativo "
  
  if(itsOk) {
    balanceText = "Positivo"
  } 

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}.`)
}

calculateBalance()