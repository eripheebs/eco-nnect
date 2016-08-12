class AddTitleToInvestments < ActiveRecord::Migration
  def change
    add_column :investments, :title, :string
  end
end
