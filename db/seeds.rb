# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

hunter = User.create!(
  username: 'hunter12',
  email: 'hunter12@gmail.com',
  password: 'hunter12',
  icon_color: '#42d4f4'
)

demo = User.create!(
  username: 'Demo',
  email: 'demouser@gmail.com',
  password: 'password123!',
  icon_color: '#000000'
)

duck_sauce = Video.create!(
  title: "Duck Sauce",
  description: "Oh Hello",
  uploader_id: hunter.id
)

bellyflop = Video.create!(
  title: "bellyflop",
  uploader_id: hunter.id
)

comment1 = Comment.create!(
  body: "Wow!",
  author_id: demo.id,
  video_id: bellyflop.id
)

comment2 = Comment.create!(
  body: "FLOP!!!",
  author_id: demo.id,
  video_id: bellyflop.id
)

duck_thumb = open("https://blutube-seed.s3.amazonaws.com/DuckSauceThumb.png")
duck_vid = open("https://blutube-seed.s3.amazonaws.com/duck-sauce.mp4")
duck_sauce.thumbnail.attach(io: duck_thumb, filename: "duck-sauce-thumb.png")
duck_sauce.video.attach(io: duck_vid, filename: "duck-sauce.mp4")


belly_thumb = open("https://blutube-seed.s3.amazonaws.com/bellyflopthumb.png")
belly_vid = open("https://blutube-seed.s3.amazonaws.com/belly-flop.mp4")
bellyflop.thumbnail.attach(io: belly_thumb, filename: "bellyflopthumb.png")
bellyflop.video.attach(io: belly_vid, filename: "belly-flop.mp4")
