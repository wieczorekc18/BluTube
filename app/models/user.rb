# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  icon_color      :string
#

class User < ApplicationRecord
    validates :password_digest, :username, presence: true 
    validates :email, :session_token, uniqueness: true, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :uploaded_videos,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :Video

    has_many :comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment

    has_many :likes, 
        foreign_key: :user_id,
        class_name: :Like

    after_initialize :ensure_session_token, :assign_color

    attr_reader :password 

    def self.find_by_email(email)
        user = User.find_by(email: email)
        return nil unless user
        user
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    private

    def self.generate_session_token
        SecureRandom::urlsafe_base64        
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def assign_color
        colors = [
            '#800000',
            '#9A6324',
            '#808000',
            '#469990',
            '#000075',
            '#e6194B',
            '#f58231',
            '#3cb44b',
            '#42d4f4',
            '#4363d8',
            '#911eb4',
            '#f032e6',
            '#a9a9a9',
        ]
        self.icon_color ||= colors.sample
    end
end
