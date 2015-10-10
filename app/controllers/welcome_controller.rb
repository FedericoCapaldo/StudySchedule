class WelcomeController < ApplicationController
require 'pry'
  def index
  	@days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  	@week = Week.find(5)
  	@monday = @week.days.find_by(name: "Monday")
  	@monday_name1 = @monday.activities.find(1).name
  	@monday_hour1 = @monday.activities.find(1).hour.to_i
  	@monday_name2 = @monday.activities.find(2).name
  	@monday_hour2 = @monday.activities.find(2).hour.to_i
  	@monday_name3 = @monday.activities.find(3).name
  	@monday_hour3 = @monday.activities.find(3).hour.to_i
  	
  	@tuesday = @week.days.find_by(name: "Tuesday")
  	@tuesday_name1 = @tuesday.activities.find(4).name
  	@tuesday_hour1 = @tuesday.activities.find(4).hour.to_i
  	@tuesday_name2 = @tuesday.activities.find(5).name
  	@tuesday_hour2 = @tuesday.activities.find(5).hour.to_i
  	@tuesday_name3 = @tuesday.activities.find(6).name
  	@tuesday_hour3 = @tuesday.activities.find(6).hour.to_i

	@wednesday = @week.days.find_by(name: "Wednesday")
  	@wednesday_name1 = @wednesday.activities.find(7).name
  	@wednesday_hour1 = @wednesday.activities.find(7).hour.to_i
  	@wednesday_name2 = @wednesday.activities.find(8).name
  	@wednesday_hour2 = @wednesday.activities.find(8).hour.to_i

	@thursday = @week.days.find_by(name: "Thursday")
  	@thursday_name1 = @thursday.activities.find(9).name
  	@thursday_hour1 = @thursday.activities.find(9).hour.to_i
  	@thursday_name2 = @thursday.activities.find(10).name
  	@thursday_hour2 = @thursday.activities.find(10).hour.to_i

	@friday = @week.days.find_by(name: "Friday")
  	@friday_name1 = @friday.activities.find(11).name
  	@friday_hour1 = @friday.activities.find(11).hour.to_i

	@saturday = @week.days.find_by(name: "Saturday")
  	@saturday_name1 = @saturday.activities.find(12).name
  	@saturday_hour1 = @saturday.activities.find(12).hour.to_i
  	@saturday_name2 = @saturday.activities.find(13).name
  	@saturday_hour2 = @saturday.activities.find(13).hour.to_i

	@sunday = @week.days.find_by(name: "Sunday")
  	@sunday_name1 = @sunday.activities.find(14).name
  	@sunday_hour1 = @sunday.activities.find(14).hour.to_i

  end
end
