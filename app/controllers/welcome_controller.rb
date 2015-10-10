class WelcomeController < ApplicationController
  def index
  	@days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  	@week = Week.find(5)
  end
end
