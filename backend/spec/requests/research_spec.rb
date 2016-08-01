require 'rails_helper'

describe 'ReseachAPI' do
  let!(:request_headers) { { 'Accept': 'application/json',
                            'Content-Type': 'application/json' } }
  let!(:research) {FactoryGirl.create(:research)}

  before(:each) do
    user = FactoryGirl.build(:user)
    auth_headers = user.create_new_auth_token
    request_headers.merge!(auth_headers)
  end

  describe 'POST /research' do
    it 'creates a new research' do
      new_research = FactoryGirl.build(:research)
      opts = { 'topic': new_research.topic,
      'description': new_research.description,
      'files': new_research.files
      }
      post '/researches',
            set_research_params(opts),
            request_headers

      expect(response.status).to eq 200
      expect(Research.last.topic).to eq new_research.topic
      expect(Research.last.description).to eq new_research.description
      expect(Research.last.files).to eq new_research.files
    end
  end

  describe 'GET /researches' do
    it 'returns a list of researches' do
      get '/researches', {}, { 'Accept': 'application/json' }

      expect(response.status).to eq 200

      research_data = JSON.parse(response.body)

      expect(research_data[0]['topic']).to eq research.topic
      expect(research_data[0]['description']).to eq research.description
      expect(research_data[0]['files']).to eq research.files
    end
  end

  describe 'GET /researches/:id' do
    it 'returns an research' do
      get "/researches/#{research.id}", {}, { 'Accept': 'application/json' }

      expect(response.status).to eq 200

      research_data = JSON.parse(response.body)

      expect(research_data['topic']).to eq research.topic
    end
  end

  describe 'PATCH /researches/:id' do
    it 'edits an research' do
      opts = { 'topic': 'Jollybean topic',
      'description': research.description,
      'files': research.files
      }
      patch "/researches/#{research.id}",
            set_research_params(opts),
            request_headers

      expect(response.status).to eq 200

      expect(research.find(research.id).topic).to eq 'Jollybean topic'
    end
  end

  describe 'DELETE /researches/:id' do
    it 'deletes an research' do
      delete "/researches/#{research.id}"

      expect(response.status).to eq 200

      expect(Research.all).not_to include research
    end
  end
end
