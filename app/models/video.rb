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

    has_many :likes,
        as: :likable,
        class_name: :Like


    validate :video_size_validation

    def video_size_validation
        if video.attached?
            if video.blob.byte_size > 10000000
                video.purge
                errors[:base] << 'File is too big'
            elsif !video.blob.content_type.starts_with?('video/')
                video.purge
                errors[:base] << 'File is the wrong format'
            end
        end
    end

    validate :thumb_validation

    def thumb_validation
        if thumbnail.attached?
            if thumbnail.blob.byte_size > 10000000
                thumbnail.purge
                errors[:base] << 'File is too big'
            elsif !thumbnail.blob.content_type.starts_with?('image/')
                thumbnail.purge
                errors[:base] << 'File is the wrong format'
            end
        end
    end
end
