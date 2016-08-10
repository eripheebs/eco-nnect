# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Investment.create(industry: 'Solar', description: 'Funding solar panel research', ngo: 'Fake Corporation Name')
Investment.create(industry: 'Marine Conservation', description: 'Funding marine conservation initiatives', ngo: 'Fake Corporation Name 2')

Research.create(topic: 'Solar Panels', description: 'Research into making solar panels more efficient. Blahb lah blah blah blah blah', files: '[]')
