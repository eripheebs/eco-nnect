require 'rails_helper'

describe 'InvestmentsAPI' do
  let!(:request_headers) { { 'Accept': 'application/json',
                            'Content-Type': 'application/json' } }

  describe 'post /investments' do
    it 'creates a new investment' do
      new_investment = FactoryGirl.build(:investment)
      opts = { 'industry': new_investment.industry,
      'description': new_investment.description,
      'ngo': new_investment.ngo
      }
      post '/investments',
            set_investment_params(opts),
            request_headers

      expect(response.status).to eq 200
      expect(Investment.last.industry).to eq new_investment.industry
      expect(Investment.last.description).to eq new_investment.description
      expect(Investment.last.ngo).to eq new_investment.ngo
    end
  end

  describe 'get /investments' do
    it 'returns a list of investments' do
      investment = FactoryGirl.create(:investment)
      get '/investments', {}, { 'Accept': 'application/json' }

      expect(response.status).to eq 200

      investment_data = JSON.parse(response.body)
      expect(investment_data[0]['industry']).to eq investment.industry
      expect(investment_data[0]['description']).to eq investment.description
      expect(investment_data[0]['ngo']).to eq investment.ngo
    end
  end
end
