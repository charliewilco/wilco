#!/usr/bin/env node
const stylelint = require("stylelint");
const meow = require("meow");
const boxen = require("boxen");
const chalk = require("chalk");
const Table = require("cli-table");
const rules = require("stylelint-config-wilco");

// TODO: Use MRI over meow

// Linter for Wilco
// --------------------

const boxStyle = {
  padding: 1,
  borderStyle: "classic"
};

const linter = x =>
  stylelint
    .lint({
      config: rules,
      files: x
    })
    .then(function(resultObject) {
      const r = resultObject.results;
      if (resultObject.errored === true) {
        for (let i = 0; i < r.length; i++) {
          const warnings = r[i].warnings;
          const table = new Table({
            head: [chalk.blue("Ln:Cl"), chalk.blue("Rule")]
          });
          for (let x = 0; x < warnings.length; x++) {
            const reference = chalk.bold.cyan(
              `${warnings[x].line}:${warnings[x].column}`
            );
            const violation = chalk.yellow(warnings[x].text);

            table.push([reference, violation]);
          }
          process.stdout.write(`${chalk.bold.red(r[i].source)}\n`);
          process.stdout.write(`${table.toString()}\n`);
        }
      } else {
        const noErr = boxen(
          chalk.cyan.bold(`Your code doesn't contain any linting violations!`),
          boxStyle
        );

        process.stdout.write(`${noErr}\n`);
      }
    })
    .catch(function(err) {
      console.warn(err);
    });

// Wilco
// --------------------

const Wilco = files =>
  files
    ? linter(files)
    : process.stdout.write(`${chalk.bold.blue("Please specify some files")}\n`);

// CLI Setup for Wilco
// --------------------

const cli = meow(
  `
  Usage
    $ wilco <input>

  Options
    $ wilco --version, -v Print out the version number

  Examples
    $ wilco ./styles/**/*.css
`,
  {
    alias: { v: "version" }
  }
);

module.exports = Wilco(cli.input[0]);
