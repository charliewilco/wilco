import test from 'ava'
import execa from 'execa'

test(async output => {
  const { stdout } = await execa('./cli.js')
  output.true(stdout.length > 0)
})
