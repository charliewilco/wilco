const declarations = {
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-block-no-duplicate-properties': true,
  // 'declaration-block-no-ignored-properties': true,
  'declaration-block-no-redundant-longhand-properties': true,
  'declaration-block-no-shorthand-property-overrides': true,
  'declaration-block-semicolon-newline-after': 'always-multi-line',
  'declaration-block-semicolon-space-after': 'always-single-line',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-single-line-max-declarations': 1,
  'declaration-block-trailing-semicolon': 'always',
  'declaration-colon-newline-after': 'always-multi-line',
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  'declaration-empty-line-before': [ 'always', {
    except: [
      'after-declaration',
      'first-nested'
    ],
    ignore: [
      'after-comment',
      'inside-single-line-block'
    ]
  } ]
}

module.exports = declarations
