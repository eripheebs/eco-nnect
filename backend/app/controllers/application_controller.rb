class ApplicationController < ActionController::Base
  before_action :allow_cross_origin_requests, if: proc { Rails.env.development? }
    # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  before_action :configure_permitted_parameters, if: :devise_controller?

  def preflight
    render nothing: true
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :name
    devise_parameter_sanitizer.for(:sign_up) << :provider
    devise_parameter_sanitizer.for(:sign_up) << :uid
  end

  def allow_cross_origin_requests
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    headers['Access-Control-Max-Age'] = '1728000'
  end
end
