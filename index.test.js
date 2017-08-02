const should = require('should')

const preset = require('./')

describe('Medopad\'s Babel preset for React', () => {
  it('should have property `presets`', () => {
    should(preset).have.property('presets')
  })

  it('should have 2 presets listed', () => {
    should(preset.presets.length).equal(2)
  })
})
