// dependency
const fs = require('fs');

const writeToFile = (documentName, documentBody) => {

    // writes file to dist folder. removes .html if user entered it
    const filePath = `./dist/${documentName.replace('.html', '')}`;

    fs.writeFile(`${filePath}.html`, documentBody, (err) =>
    err ? console.error(err) : console.log("\x1b[32mHTML document successfully created in the 'dist' folder!\x1b[0m"));

}

module.exports = writeToFile;