// Boleanos

const user = {
  name: 'Karol',
  height: 166,
  hasTicket: true,
}

const necessaryHeight = 130

const currentHour = new Date().getHours()

const isParkOpen = currentHour > 9 && currentHour < 18

if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

const hasTicket = user.hasTicket

if (!hasTicket) {
  throw new Error('A Karol não possui um bilhete para entrar no parque!')
}

const doesEnterToy = user.height > necessaryHeight

if (!doesEnterToy) {
  throw new Error('A Karol não pode entrar no brinquedo!')
} 

console.log('A Karol se divertiu muito! :)')