include ActionDispatch::TestProcess

FactoryGirl.define do
  factory :investment do
    industry { Faker::Company.buzzword }
    description { Faker::Hipster.sentence }
    ngo { Faker::Company.name }
  end
end
