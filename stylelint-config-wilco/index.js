const _ = require('lodash')
const selectors = require('./rules/selectors')
const colors = require('./rules/colors')
const declarations = require('./rules/declarations')
const blocks = require('./rules/blocks')
const nest = require('./rules/nest')
const feature = require('./rules/feature')
const functions = require('./rules/functions')
const values = require('./rules/value-list')
const atRule = require('./rules/at-rule')
const units = require('./rules/units')
const property = require('./rules/property')
const customProps = require('./rules/custom-props')

const misc = {
  'indentation': 2,
  'keyframe-declaration-no-important': true,
  'length-zero-no-unit': true,
  'max-empty-lines': 2,
  'media-query-list-comma-space-before': 'never',
  'no-empty-source': true,
  'no-eol-whitespace': true,
  'no-extra-semicolons': true,
  'no-invalid-double-slash-comments': true,
  'no-missing-end-of-source-newline': true,
  'number-leading-zero': 'never',
  'number-no-trailing-zeros': true,

  'shorthand-property-no-redundant-values': true,
  'string-no-newline': true
}

const wilco = {
  'rules': _.assignIn(atRule, property, units, nest, misc,
                      customProps, feature, selectors, functions,
                      colors, declarations, blocks, values)
}

module.exports = wilco
