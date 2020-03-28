const schedule = require('node-schedule')

// '*/5 * 12 * * 6'
// 'segundo minuto hora dia-do-mês mês dia-da-semana'
//   '5' -> executa apenas no segundo 5
// '*/5' -> executa a cada 5 segundos
// '*'   -> ignora o parâmetro
// dia-da-semana -> inicia no domingo -> 0
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 6', function () {
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel()
  console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate -> imediatamente
// setInterval  -> de tempos em tempos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log('Executando Tarefa 2!', new Date().getSeconds())
})
