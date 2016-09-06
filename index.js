#!/usr/bin/env node
import stylelint from 'stylelint'
import meow from 'meow'
import boxen from 'boxen'
import chalk from 'chalk'
import Table from 'cli-table'
import rules from 'stylelint-config-wilco'

// Linter for Wilco
// --------------------

const linter = x => stylelint.lint({
  config: rules,
  files: x
}).then(function (resultObject) {
  const r = resultObject.results
  if (resultObject.errored === true) {
    for (let i = 0; i < r.length; i++) {
      const warnings = r[i].warnings
      const table = new Table({
        head: [chalk.blue('Ln:Cl'), chalk.blue('Rule')]
      })
      for (let x = 0; x < warnings.length; x++) {
        const reference = chalk.bold.cyan(`${warnings[x].line}:${warnings[x].column}`)
        const violation = chalk.yellow(warnings[x].text)

        table.push([ reference, violation ])
      }
      process.stdout.write(`${chalk.bold.red(r[i].source)}\n`)
      process.stdout.write(`${table.toString()}\n`)
    }
  } else {
    const noErr = boxen(chalk.cyan.bold(`Your code doesn\'t contain any linting violations!`), {
      padding: 1,
      borderStyle: 'classic'
    })

    process.stdout.write(`${noErr}\n`)
  }
}).catch(function (err) {
  console.warn(err)
})

// Wilco
// --------------------

function wilco (files) {
  files ? linter(files) : process.stdout.write(`${chalk.bold.blue('Please specify some files')}\n`)
}

// CLI Setup for Wilco
// --------------------

const cli = meow(`
  Usage
    $ wilco <input>

  Options
    $ wilco --version, -v Print out the version number

  Examples
    $ wilco ./styles/**/*.css
`, {
  alias: { v: 'version' }
})

wilco(cli.input[0])
