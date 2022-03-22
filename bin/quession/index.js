import inquirer from "inquirer"
import normalQuesson from "./static.js"
import dependencies from './dependencies.js'

export default () => {
    return inquirer.prompt([...normalQuesson(), dependencies()])
}