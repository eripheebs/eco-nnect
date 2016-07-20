### Eco-nnect

#To do:
1. Rails backend
2. refer to issues for breakdown of tasks

####To run the app locally:
```
$ cd react_frontend
REACT STUFF HERE
$ cd ..
$ cd backend
$ bin/rake db:create
$ bin/rake db:migrate
$ export AUTH0_CLIENT_ID = (your client id here)
$ export AUTH0_CLIENT_SECRET = (your client secret key here)
```

####To run tests:
Jest tests:
```
$ cd frontend
$ jest
```
Rspec tests:
```
$ cd backend
$ rspec
```


bin/rake db:create RAILS_ENV=test
bin/rake db:migrate RAILS_ENV=test
