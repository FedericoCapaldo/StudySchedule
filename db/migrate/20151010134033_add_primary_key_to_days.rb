class AddPrimaryKeyToDays < ActiveRecord::Migration
  def change
  	add_column :days, :id, :primary_key
  end
end
