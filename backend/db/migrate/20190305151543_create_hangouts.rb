class CreateHangouts < ActiveRecord::Migration[5.2]
  def change
    create_table :hangouts do |t|
      t.references :user, foreign_key: true
      t.string :name
      t.string :date
      t.string :time
      t.float :lat
      t.float :long
      t.text :information
      t.timestamps
    end
  end
end
