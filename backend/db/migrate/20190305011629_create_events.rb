class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :identifier
      t.string :name
      t.string :date
      t.string :time
      t.text :information

      t.timestamps
    end
  end
end
