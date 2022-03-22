#!/usr/bin/env node
import fs from 'fs'
import quession from './quession/index.js'
import { createInputConfig } from './inputConfig.js'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'
import { execa } from 'execa'

// input
// process
// output

const input = await quession()

const inputConfig = createInputConfig(input)

fs.mkdirSync(getRootPath())

fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(inputConfig))

fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(inputConfig))

function getRootPath() {
    return `./${input.packageName}`
}

execa("yarn", {
    cwd: getRootPath()
    // stdio: [2, 2, 2]
})





