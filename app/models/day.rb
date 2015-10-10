class Day < ActiveRecord::Base	
	has_many :activities
	belongs_to :week
end
