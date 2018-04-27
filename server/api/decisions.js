const router = require('express').Router()
const {Decision, Point} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Decision.findAll()
    .then(decisions => res.json(decisions))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Decision.create(req.body)
    .then(created => {
      res.json(created)
    })
    .catch(next)
})

router.post('/points', (req, res, next) => {
  Point.create(req.body)
    .then(created => {
      return created.setDecision(req.body.decisionId)
    })
    .then(updated => {
      res.json(updated)
    })
    .catch(next)
})
