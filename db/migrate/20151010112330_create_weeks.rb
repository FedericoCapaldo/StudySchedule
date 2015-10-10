class CreateWeeks < ActiveRecord::Migration
  def change
    create_table :weeks do |t|
      t.integer :start_day
      t.integer :end_day
      t.integer :month

      t.timestamps null: false
    end
  end
end
