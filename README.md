### Eco-nnect

#To do:
1. Rails backend
2. refer to issues for breakdown of tasks

####To run the app locally:
```
$ npm install
$ cd frontend
$ bower install
$ http-server frontend/index.html
$ cd ..
$ cd backend
$ bin/rake db:create
$ bin/rake db:migrate
$ export AUTH0_CLIENT_ID = (your client id here)
$ export AUTH0_CLIENT_SECRET = (your client secret key here)
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

bin/rake db:create RAILS_ENV=test
bin/rake db:migrate RAILS_ENV=test
