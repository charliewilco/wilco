#!/usr/bin/env node
import stylelint from 'stylelint'
import meow from 'meow'
import rules from 'stylelint-config-wilco'

const wilco = function (files) {
  return stylelint.lint({
    config: rules,
    formatter: 'string',
    files: files
  }).then(function (resultObject) {
    console.log(resultObject)
  }).catch(function (err) {
    console.warn(err)
  })
}

const cli = meow(`
    Usage
      $ wilco <input>

    Examples
      $ wilco ./styles/**/*.css
`)

wilco(cli.input[0])
