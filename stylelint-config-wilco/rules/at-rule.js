const atRule = {
  'at-rule-empty-line-before': [ 'always', {
    except: [
      'blockless-after-same-name-blockless',
      'first-nested'
    ],
    ignore: ['after-comment']
  } ],
  'at-rule-name-case': 'lower',
  'at-rule-name-space-after': 'always-single-line',
  'at-rule-semicolon-newline-after': 'always'
}

module.exports = atRule
