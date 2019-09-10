json.array! @total_likes do |like|
    json.extract like, :id, :value, :user_id, :likeable_type, :likeable_id
end