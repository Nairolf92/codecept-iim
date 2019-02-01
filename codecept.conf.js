exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show : true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  name: 'puppeteer-iim'
}