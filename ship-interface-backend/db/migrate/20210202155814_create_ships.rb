class CreateShips < ActiveRecord::Migration[6.0]
  def change
    create_table :ships do |t|
      t.string :hull
      t.string :nav
      t.string :weapons

      t.timestamps
    end
  end
end
