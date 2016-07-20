include ActionDispatch::TestProcess

FactoryGirl.define do
  factory :research do
    topic { Faker::Company.buzzword }
    description { Faker::Hipster.sentence }
    files { [ "fake_file", "fake_file2" ] }
  end
end
