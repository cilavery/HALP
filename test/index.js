
const {expect} = require('chai')
const db = require('../server/db/index')

const Decision = db.model('decision')
const Point = db.model('point')




describe('decisionModel', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('decision', () => {
    let shouldI;

    before(function () {
      Decision.create({
        question: 'Should I move to Portland, OR?'
      })
      .then(decision => {
        shouldI = decision
      })
    })

    it('tests if a decision can be created', () => {
      expect(shouldI.question).to.equal('Should I move to Portland, OR?')
    })
  })
})





