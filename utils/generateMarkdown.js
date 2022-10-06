// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null) {
  return `![License Badge](https://img.shields.io/badge/License-`+ license +`-blue.svg)`
} else{
  return ''
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'Apache'){
      return `https://choosealicense.com/licenses/apache-2.0/`
    } else if (license === 'Boost'){
      return `https://choosealicense.com/licenses/bsl-1.0/`
    } else if (license === 'BSD'){
      return `https://choosealicense.com/licenses/bsd-3-clause-clear`
    } else if (license === 'Creative-Commons'){
      return `https://choosealicense.com/licenses/cc0-1.0`
    } else if (license === 'Eclipse'){
      return `https://choosealicense.com/licenses/epl-2.0`
    } else if (license === 'GNU'){
      return `https://choosealicense.com/licenses/gpl-3.0`
    } else if (license === 'MIT'){
      return `https://choosealicense.com/licenses/mit`
    } else if (license === 'Mozilla'){
      return `https://choosealicense.com/licenses/mpl-2.0`
    } else if (license === 'Unlicense'){
      return `https://choosealicense.com/licenses/unlicense`
    } else {
      return ''
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'Apache'){
    return 'Apache License 2.0'
  } else if (license === 'Boost'){
    return 'Boost Software License 1.0'
  } else if (license === 'BSD'){
    return 'BSD 3-Clause "New" or "Revised" License'
  } else if (license === 'Creative-Commons'){
    return 'Creative Commons Zero v1.0 Universal'
  } else if (license === 'Eclipse'){
    return 'Eclipse Public License 2.0'
  } else if (license === 'GNU'){
    return 'GNU General Public License v3.0'
  } else if (license === 'MIT'){
    return 'MIT License'
  } else if (license === 'Mozilla'){
    return 'Mozilla Public License v2.1'
  } else if (license === 'Unlicense'){
    return 'The Unlicense'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation

Please take the following steps to install this application:

${data.install}

Please ensure that these steps are taken to ensure the application runs smoothly.

## Usage

${data.usage}

Here is a screenshot of the completed application:

![Application Screenshot](../assets/images/finished-webpage.png)

## Contributors

Here is a list of contributors to this application:

${data.contribution}

## License

This application is covered by the ${renderLicenseSection(data.license)}.

Here is a link to the above license detailing its use:

${renderLicenseLink(data.license)}


## Tests

To ensure that this application is working, please perform the following tests:

${data.test}

## Questions

Here are two links to reach out to me:

Github: https://github.com/${data.gHUser}

Email: ${data.email}

`;
}

module.exports = generateMarkdown;
