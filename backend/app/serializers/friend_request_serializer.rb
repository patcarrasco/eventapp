class FriendRequestSerializer < ActiveModel::Serializer
  attributes :id, :user
  has_one :friend
end
