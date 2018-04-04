const restful = require('node-restful')
const mongoose = restful.mongoose

const creditScheme = new mongoose.Schema({
  name: {type: String, required: true },
  value: {type: Number, min:0, required: true }
})

const debtScheme = new mongoose.Schema({
  name: {type: String, required: true },
  value: {type: Number, min:0, required: true },
  status: {type: String, required: false, uppercase: true, enum:['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleScheme = new mongoose.Schema({
  name: {type: String, required: true },
  month: {type: Number, min:1, max:12, required: true },
  year: {type: Number, min:1970, max:20100, required: true },
  credits: [creditScheme],
  debts: [debtScheme]
})

module.exports = restful.model('BillingCycle', billingCycleScheme)