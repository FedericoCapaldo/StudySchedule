class WelcomeController < ApplicationController
  def index
  	@days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  	@week = Week.find(5)
  	@monday = @week.days.find_by(name: "Monday")
  	@activities = []
  	test = "xxx"
  	@activities << { name: test, 
  					 hour: test }
  end
end
