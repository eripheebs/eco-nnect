### Eco-nnect

####To run the app locally:
```
$ npm install
$ bower install
$ http-server frontend/index.html
```

####To run tests:
Protractor tests:
```
$ webdriver-manager update
$ webdriver-manager start
```
* In a different console tab:
```
$ protractor test/protractor.conf.js
```
Karma tests:
```
$ karma start test/karma.conf.js
```
