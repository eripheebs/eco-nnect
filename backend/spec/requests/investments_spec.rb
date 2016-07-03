require 'rails_helper'

describe 'InvestmentsAPI' do
  let!(:request_headers) { { 'Accept': 'application/json',
                            'Content-Type': 'application/json' } }

  describe 'post /investments' do
    before do
      new_investment = FactoryGirl.build(:investment)
      opts = { 'industry': new_investment.industry,
      'description': new_investment.description,
      'ngo': new_investment.ngo
      }
    end

    it 'creates a new investment' do
      post '/investments',
            set_investment_params(opts),
            request_headers

      expect(response.status).to eq 200
      expect(Investment.last.industry).to eq new_investment.industry
      expect(Investment.last.description).to eq new_investment.description
      expect(Investment.last.ngo).to eq new_investment.ngo
    end
  end


end
