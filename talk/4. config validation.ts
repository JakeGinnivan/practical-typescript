import { getConfig } from '../src/helpers/get-config.done'

process.env.VALUE_1 = 'val 1'
process.env.VALUE_2 = '2'
process.env.VALUE_3 = 'val 3'
process.env.VALUE_4 = '4'

// delete process.env.VALUE_1
// delete process.env.VALUE_2
// delete process.env.VALUE_3
// delete process.env.VALUE_4

const config = getConfig({
    VALUE_1: 'required-string',
    VALUE_2: 'required-int',
    VALUE_3: 'optional-string',
    VALUE_4: 'optional-int',
})

config // ?
config.VALUE_1
