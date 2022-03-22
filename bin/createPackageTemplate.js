
import ejs from 'ejs';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
// import prettier from 'prettier'

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url)
    const template = fs.readFileSync(path.resolve(__dirname, "../template/package.ejs"));

    const code =  ejs.render(template.toString(), {
        packageName: config.packageName,
        ...config.middleware
    })

    return code
    // return prettier.format(code, { parser: "json"})
};

