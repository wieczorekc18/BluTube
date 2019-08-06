# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  uploader_id :integer          not null
#  title       :string           not null
#  description :text
#  length      :time
#  thumb_url   :string
#  views       :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

    validates :title, presence: true

    has_one_attached :video 

    has_one_attached :thumbnail 

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :comments,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Comment

end
