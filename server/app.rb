require 'rubygems'
require 'sinatra'
require 'json'
require 'tilt/erb'

class MainApp < Sinatra::Base

  before do
    content_type :json
  end

  get '/admin' do
    "this is a server side page rendering, you can create another entry point in Webpack to load admin specific scripts and assets"
  end

  get '/search' do
    @query = params["q"]
    sleep(1)
    case @query
      when "single"
        @result = [{:id => 1, :content => "this is a single content"}]
      when "list"
        @result = [{:id => 1, :content => "content 1"}, {:id => 2, :content => "content 2"}]
      else
        status 404
        @result = "something went wrong"
    end
    @result.to_json
  end

  get '/*' do
    content_type :html
     erb :index, :locals => {
                  :style_url => "http://localhost:9090/assets/style.css",
                  :vendor_url => "http://localhost:9090/assets/vendors.js",
                  :script_url => "http://localhost:9090/assets/app.bundle.js"
              }
  end

end
