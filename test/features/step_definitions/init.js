const apickli = require('apickli')
const fs = require('fs')
const {
  Before,
  After,
  When,
  setDefaultTimeout
} = require('cucumber')

const basepath = require('../../config/proxyConfig.json')[process.env.proxy]
const env = process.env.env
const urlSuffix = env == 'prd' ? 'pokeapi.co' : 'test-poke.ceo'
console.log('\n\nproxyname------------', process.env.proxy)
console.log('proxy basepath-------', basepath)
console.log('environment----------', urlSuffix,'\n\n')

Before(function () {
  this.apickli = new apickli.Apickli('https', urlSuffix + basepath)
})

After(function(){
  let logStr = '\n\n\n-----------------------------------------------------------------API Request------------------------------------------------------------\n' +JSON.stringify(this.apickli.httpRequestOptions) +
              '\n------------------------------------------------------------------API Response-----------------------------------------------------------\n' + this.apickli.httpResponse.body +
              '\n------------------------------------------------------------------API Response headers---------------------------------------------------\n' + JSON.stringify(this.apickli.httpResponse.headers) +
              '\n***********************************************************************************************************************************************\n'
  writeLog(logStr)
})

When(/^execution is complete prepare the report$/, function(callback) {
  var reporter = require('cucumber-html-reporter');
  var options = {
          theme: 'bootstrap',
          jsonFile: './reports/report.json',
          output: './reports/Test_execution_report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: false,
          metadata: {
              "App Version":"1.0.0",
              "Test Environment": "Production Environment",
              "Browser": "N/A",
              "Platform": "Test Platform",
              "Parallel": "Scenarios",
              "Executed": "Jenkins"
          }
    };
    reporter.generate(options);
    callback();
})


function writeLog(str) {
    return new Promise(function (resolve, reject) {
        fs.appendFile('./reports/executionLog.txt', str, function (err) {
            if (err) {
                return reject("Unexpected response")
            } else {
                return resolve('true')
            }
        })
    })
}

setDefaultTimeout(20 * 1000)
