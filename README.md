### Eco-nnect

#To do:
1. Rails backend
2. refer to issues for breakdown of tasks

####To run the app locally:
```
$ cd react_frontend
$ npm run devserve
$ cd ..
$ cd backend
$ bin/rake db:create
$ bin/rake db:migrate
$ bin/rake db:seed
$ export AUTH0_CLIENT_ID = (your client id here)
$ export AUTH0_CLIENT_SECRET = (your client secret key here)
$ rails s -p 3001
```

####To run tests:
Jest tests:
```
$ cd frontend
$ jest
```
Rspec tests:
```
$ bin/rake db:create RAILS_ENV=test
$ bin/rake db:migrate RAILS_ENV=test
$ cd backend
$ rspec
```
