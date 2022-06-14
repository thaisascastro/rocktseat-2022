// throw -> disparar, lançar

// try -> tentar 

// catch -> pegar

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
  console.log('depois do erro')
}

try {
  sayMyName()
} catch (e) {
  console.log(e)
}