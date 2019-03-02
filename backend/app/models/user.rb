class User < ApplicationRecord

    
    has_many :follower_relationships, foreign_key: :followee_id, class_name: 'Follow'
    has_many :followers, through: :follower_relationships, source: :follower

    has_many :followee_relationships, foreign_key: :follower_id, class_name: 'Follow'
    has_many :following, through: :followee_relationships, source: :followee

    validates_uniqueness_of :username
    has_secure_password

end
