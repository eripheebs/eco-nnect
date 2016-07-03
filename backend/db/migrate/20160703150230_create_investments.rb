class CreateInvestments < ActiveRecord::Migration
  def change
    create_table :investments do |t|
      t.string :industry
      t.string :description
      t.string :ngo

      t.timestamps null: false
    end
  end
end
