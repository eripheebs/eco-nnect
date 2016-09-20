class AddFilesToFiles < ActiveRecord::Migration
  def self.up
    add_attachment :files, :file
  end

  def self.down
    remove_attachment :files, :file
  end
end
