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
      expect(shouldI).to.equal(shouldI)
    })
  })
})




describe('Point model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('pro', function() {
    it('tests if a pro can be created');
    it('tests if a con can be created');
    it('test if decision can get all associated pro and con');
    it('add weights for pro');
    it('add weight for con');
    it('get total weight from pro and con');
  })

})
