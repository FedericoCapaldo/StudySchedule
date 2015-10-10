class WelcomeController < ApplicationController
  def index
  	@days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  	@week = Week.find(5)
  	@monday = @week.days.find_by(name: "Monday")
  	@activities = []
  	test = "test"
  	@activities << { name: test, 
  					 hour: testx2 }
  end
end
