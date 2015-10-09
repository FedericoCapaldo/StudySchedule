class WelcomeController < ApplicationController
  def index
  	@days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  end
end
