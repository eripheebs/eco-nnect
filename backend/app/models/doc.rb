class Doc < ActiveRecord::Base
  belongs_to :research

  DIRECT_UPLOAD_URL_FORMAT = %r{
    \A
    https:\/\/
    #{Rails.application.secrets.aws['s3_bucket_name']}\.s3\.amazonaws\.com\/
    (?<path>uploads\/.+\/(?<filename>.+))
    \z
  }x.freeze

  has_attached_file :file

  do_not_validate_attachment_file_type :file
end
