class Membership < ApplicationRecord
    belongs_to :hangout
    belongs_to :user
end
