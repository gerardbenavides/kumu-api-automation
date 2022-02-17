const baseUrl = 'http://216.10.245.166';
const request = require('supertest')(baseUrl);
const expect = require('chai').expect;

module.exports = {
  'allow-uncaught': false,
  'async-only': false,
  bail: false,
  'check-leaks': false,
  color: true,
  delay: false,
  diff: true,
  exit: false,
  extension: ['js'],
  'forbid-only': false,
  'forbid-pending': false,
  'full-trace': false,
  global: ['jQuery', '$'],
  'inline-diffs': false,
  jobs: 1,
  package: './package.json',
  parallel: false,
  recursive: false,
  reporter: 'node_modules/spec',
  retries: 3,
  slow: '3000',
  sort: false,
  timeout: '15000',
  'trace-warnings': true,
  ui: 'bdd',
  'v8-stack-trace-limit': 100,
  watch: false,
  'watch-files': ['lib/**/*.js', 'test/**/*.spec.js'],
  'watch-ignore': ['lib/vendor'],

  baseUrl: baseUrl,
  request: request, 
  expect: expect, 
};