class User < ApplicationRecord
    has_many :follower_relationships, foreign_key: :followee_id, class_name: 'Follow'
    has_many :followers, through: :follower_relationships, source: :follower

    has_many :followee_relationships, foreign_key: :follower_id, class_name: 'Follow'
    has_many :following, through: :followee_relationships, source: :followee

    has_many :tickets
    has_many :created_hangouts, foreign_key: :user_id, class_name: 'Hangout'
    has_many :memberships
    has_many :hangouts, through: :memberships 

    validates_uniqueness_of :username, :uuid
    has_secure_password

end
