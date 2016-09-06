module.exports = function setZunderConfig (zunder) {
  zunder.setConfig({
    cacheBust: false,
    prodDir: 'dist',
    resolutions: ['react', 'react-dom', 'mobx', 'mobx-react', 'lodash'],
    scriptName: 'runner.js',
    stylesheetName: 'runner.css',
    staticGlobs: {
      'static/**': '',
      'node_modules/font-awesome/fonts/**': '/fonts',
      'node_modules/@cypress/core-reporter/dist/reporter.css': '',
    },
    testDir: 'dist',
  })
}
