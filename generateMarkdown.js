// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT"){
        return "![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    } else {
        return ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
      return `This project is covered under an MIT license. More information can be found here: https://opensource.org/licenses/MIT`
    } else {
      return ""
    }
  }
   

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "MIT") {
      return '- [License](#license)'
    } else {
      return ""
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.name}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
# Purpose
${data.purpose}
# Resolution
${data.resolution}
# Outcome
${data.outcome}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseSection(data.license)}
- [Tests](#tests)
- [Qustions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## Credits
Collaborators that helped with this project: ${data.contributors}
## License
${renderLicenseLink(data.license)}
## Tests
${data.test}
## Questions
If you have any questions, feel free to email <${data.email}> or checkout my [Github](https://github.com/${data.github})!
`

  

;
}






module.exports = {generateMarkdown};