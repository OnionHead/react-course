const express = require('express')

module.exports = function(server) {
  const routes = express.Router()

  server.use('/api', router)

  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}