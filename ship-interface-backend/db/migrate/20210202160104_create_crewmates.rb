class CreateCrewmates < ActiveRecord::Migration[6.0]
  def change
    create_table :crewmates do |t|
      t.string :name
      t.string :role
      t.string :status

      t.timestamps
    end
  end
end
