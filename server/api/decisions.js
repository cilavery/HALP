const router = require('express').Router()
const {Decision, Point} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Decision.findAll()
    .then(decisions => res.json(decisions))
    .catch(next)
})

router.post('/', (req, res, next) => {
  console.log('REQ BODY', req.body)
  Decision.create(req.body)
    .then(created => res.json(created))
    .catch(next)
})
