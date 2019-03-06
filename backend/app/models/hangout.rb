class Hangout < ApplicationRecord
    belongs_to :user, foreign_key: 'user_id', class_name: 'User'
    has_many :memberships
    has_many :users, through: :memberships
end
