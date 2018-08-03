const customProps = {
  'custom-property-empty-line-before': [ 'always', {
    except: [
      'after-custom-property',
      'first-nested'
    ],
    ignore: [
      'after-comment',
      'inside-single-line-block'
    ]
  }]
}

module.exports = customProps
