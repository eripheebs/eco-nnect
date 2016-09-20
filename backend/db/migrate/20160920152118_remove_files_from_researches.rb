class RemoveFilesFromResearches < ActiveRecord::Migration
  def change
    remove_column :researches, :files, :string
  end
end
